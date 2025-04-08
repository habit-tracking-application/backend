import { Quest } from "src/quests/entities/quest.entity";
import { QuestsRepositoryInterface } from "../quests-repository.interface";
import { Repository } from "typeorm";

export class QuestRepository implements QuestsRepositoryInterface {
    constructor(
        private readonly repository: Repository<Quest>
    ) { }
    
    async findById(id: number): Promise<Quest> {
        return await this.repository.findOne({ where: { id: id } });
    }
    
    async save(quest: Quest): Promise<Quest> {
        return await this.repository.save(quest);
    }
    
    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
