import { Quest } from "../entities/quest.entity";
import { QuestsRepositoryInterface } from "../repositories/quests-repository.interface";
import { SaveQuestPort, SaveQuestUseCase } from "./usecases/save-quest.usecase";

export class SaveQuestService implements SaveQuestUseCase {
    constructor (
        private readonly questsRepository: QuestsRepositoryInterface
    ) {}

    async execute(payload?: SaveQuestPort): Promise<Quest> {
        const quest = new Quest(payload);
        
        return await this.questsRepository.save(quest);
    }
}
