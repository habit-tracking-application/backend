import { NotFoundException } from "@nestjs/common";
import { LongTermQuest } from "../entities/long-term-quest.entity";
import { PartialQuest } from "../entities/partial-quest.entity";
import { LongTermQuestsRepositoryInterface } from "../repositories/long-term-quests-repository.interface";
import { ParitalQuestsRepositoryInterface } from "../repositories/partial-quests-repository.interface";
import { SavePartialQuestPort, SavePartialQuestUsecase } from "./usecases/save-partial-quest.usecase";

export class SavePartialQuestService implements SavePartialQuestUsecase {
    constructor(
        private readonly partialQuestsRepository: ParitalQuestsRepositoryInterface,
        private readonly longTermQuestsRepository: LongTermQuestsRepositoryInterface
    ) { }

    async execute(payload?: SavePartialQuestPort): Promise<void> {
        const { description, longTermQuestId } = payload;

        const longTermQuest: LongTermQuest = await this.longTermQuestsRepository.findById(longTermQuestId);
        if (!longTermQuest) throw new NotFoundException();

        const newPartialQuest = new PartialQuest({ description: description, longTermQuest: longTermQuest });
        return await this.partialQuestsRepository.save(newPartialQuest);
    }
}
