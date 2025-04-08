import { UseCase } from "src/common/usecase.common";
import { LongTermQuestType } from "src/quests/entities/types/create-long-term-quest-payload.type";

export type UpdateLongTermQuestPort = {
    longTermQuestId: number;
    type: LongTermQuestType;
    goalDate: Date;
    isCompleted: Boolean;
}

export interface UpdateLongTermQuestUseCase extends UseCase<UpdateLongTermQuestPort, void> {}
