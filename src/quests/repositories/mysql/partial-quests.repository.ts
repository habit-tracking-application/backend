import { PartialQuest } from "src/quests/entities/partial-quest.entity";
import { ParitalQuestsRepositoryInterface } from "../partial-quests-repository.interface";
import { Repository } from "typeorm";

export class PartialQuestsRepository implements ParitalQuestsRepositoryInterface {
    constructor(
        private readonly repository: Repository<PartialQuest>
    ) { }

    async save(partialQuest: PartialQuest): Promise<void> {
        await this.repository.save(partialQuest);
    }

    async findById(id: number): Promise<PartialQuest> {
        return await this.repository.findOne({ where: { id: id } })
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
