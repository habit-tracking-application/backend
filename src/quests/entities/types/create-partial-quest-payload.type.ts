import { LongTermQuest } from "../long-term-quest.entity";

export type CreatePartialQuestPayload = {
    description: string;
    longTermQuest: LongTermQuest;
}