import { UseCase } from "src/common/usecase.common";
import { LongTermQuest } from "src/quests/entities/long-term-quest.entity";

export type SavePartialQuestPort = {
    description: string;
    longTermQuestId: number;
}

export interface SavePartialQuestUsecase extends UseCase<SavePartialQuestPort, void> {}