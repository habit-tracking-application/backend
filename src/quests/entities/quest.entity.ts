import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateQuestPayload } from "./types/create-quest-payload.type";

@Entity("quests")
export class Quest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "description" })
    description: string;

    @Column({ name: "experience" })
    experience: number;

    @Index("idx_quest_on_user_id")
    @Column({ name: "user_id" })
    userId: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor(payload?: CreateQuestPayload) {
        this.name = payload?.name;
        this.description = payload?.description;
        this.experience = payload?.experience;
        this.userId = payload?.userId;
    }
}
