import { LongTermQuest } from "src/quests/entities/long-term-quest.entity";
import { LongTermQuestsRepositoryInterface } from "../long-term-quests-repository.interface";
import { Repository } from "typeorm";

export class LongTermQuestsRepository implements LongTermQuestsRepositoryInterface {
    constructor(
        private readonly repository: Repository<LongTermQuest>
    ) { }

    async save(longTermQuest: LongTermQuest): Promise<void> {
        await this.repository.save(longTermQuest);
    }

    async findById(id: number): Promise<LongTermQuest> {
        return await this.repository.findOne({ where: { id: id } });
    }

    async findAllByUserId(userId: number): Promise<LongTermQuest[]> {
        return await this.repository
            .createQueryBuilder("longTermQuest")
            .innerJoinAndSelect("quests", "quest", "longTermQuest.questId = quest.id")
            .where("quest.userId = :userId", { userId })
            .getMany();
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
