import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LongTermQuest } from "./long-term-quest.entity";
import { CreatePartialQuestPayload } from "./types/create-partial-quest-payload.type";

@Entity()
export class PartialQuest {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => LongTermQuest, longTermQuest => longTermQuest.partialQuests, { onDelete: "CASCADE" })
    longTermQuest: LongTermQuest;

    @Column({ name: "description" })
    description: string;

    @Column({ name: "is_completed", default: false })
    isCompleted: Boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor (payload?: CreatePartialQuestPayload) {
        this.description = payload?.description;
        this.longTermQuest = payload?.longTermQuest;
    }
}
