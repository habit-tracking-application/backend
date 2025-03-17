import { DailyQuest } from "../daily-quest.entity";

export type CreateDailyQuestCompletionPayload = {
    dailyQuestId: number;
    dailyQuest: DailyQuest;
}