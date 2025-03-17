import { LongTermQuest } from "../entities/long-term-quest.entity";

export interface LongTermQuestsRepositoryInterface {
    save(longTermQuest: LongTermQuest): Promise<void>;
    findById(id: number): Promise<LongTermQuest>;
}