import { PartialQuest } from "../partial-quest.entity";

export type CreateLongTermQuestPayload = {
    questId: number;
    type: LongTermQuestType;
    goalDate: Date;
}

export enum LongTermQuestType {
    MAIN = 1,
    SIDE = 2,
}
