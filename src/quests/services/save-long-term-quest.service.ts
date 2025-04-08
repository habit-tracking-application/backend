import { LongTermQuest } from "../entities/long-term-quest.entity";
import { Quest } from "../entities/quest.entity";
import { LongTermQuestsRepositoryInterface } from "../repositories/long-term-quests-repository.interface";
import { SaveLongTermQuestPort, SaveLongTermQuestUseCase } from "./usecases/save-long-term-quest.usecase";
import { SaveQuestUseCase } from "./usecases/save-quest.usecase";

export class SaveLongTermQuestService implements SaveLongTermQuestUseCase {
    constructor(
        private readonly longTermQuestsRepository: LongTermQuestsRepositoryInterface,
        private readonly saveQuestService: SaveQuestUseCase
    ) { }

    async execute(payload?: SaveLongTermQuestPort): Promise<void> {
        const { type, goalDate, questInfo } = payload;
        const newQuest: Quest = await this.saveQuestService.execute(questInfo);
        
        let newLongTermQuest: LongTermQuest = new LongTermQuest({ questId: newQuest.id, type: type, goalDate: goalDate });

        await this.longTermQuestsRepository.save(newLongTermQuest);
    }
}
