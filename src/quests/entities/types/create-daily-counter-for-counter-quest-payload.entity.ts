import { CounterQuest } from "../counter-quest.entity";

export type CreateDailyCounterForCounterQuestsPaylaod = {
    counterQuestId: number;
    counterQuest: CounterQuest;
}