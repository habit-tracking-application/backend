import { NotFoundException } from "@nestjs/common";
import { LongTermQuest } from "../entities/long-term-quest.entity";
import { LongTermQuestsRepositoryInterface } from "../repositories/long-term-quests-repository.interface";
import { UpdateLongTermQuestPort, UpdateLongTermQuestUseCase } from "./usecases/update-long-term-quest.usecase";

export class UpdateLongTermQuestService implements UpdateLongTermQuestUseCase {
    constructor (
        private readonly longTermQuestsRepository: LongTermQuestsRepositoryInterface
    ) {}
    
    async execute(payload?: UpdateLongTermQuestPort): Promise<void> {
        const { longTermQuestId, type, goalDate, isCompleted } = payload;

        let longTermQuest: LongTermQuest = await this.longTermQuestsRepository.findById(longTermQuestId);
        if (!longTermQuest) throw new NotFoundException();

        longTermQuest.type = type;
        longTermQuest.goalDate = goalDate;
        longTermQuest.isCompleted = isCompleted;

        await this.longTermQuestsRepository.save(longTermQuest);
    }
}
