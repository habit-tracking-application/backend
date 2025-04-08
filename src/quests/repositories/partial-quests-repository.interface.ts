import { PartialQuest } from "../entities/partial-quest.entity";

export interface ParitalQuestsRepositoryInterface {
    save(partialQuest: PartialQuest): Promise<void>;
    findById(id: number): Promise<PartialQuest>;
    deleteById(id: number): Promise<void>;
}