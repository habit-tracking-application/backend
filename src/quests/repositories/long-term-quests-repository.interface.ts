import { LongTermQuest } from "../entities/long-term-quest.entity";
import { PartialQuest } from "../entities/partial-quest.entity";

export interface LongTermQuestsRepositoryInterface {
    save(longTermQuest: LongTermQuest): Promise<void>;
    findById(id: number): Promise<LongTermQuest>;
    findAllByUserId(userId: number): Promise<LongTermQuest[]>;
    deleteById(id: number): Promise<void>;
}