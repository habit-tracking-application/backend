import { Quest } from "../entities/quest.entity";

export interface QuestsRepositoryInterface {
    findById(id: number): Promise<Quest>;
    save(quest: Quest): Promise<void>;
}