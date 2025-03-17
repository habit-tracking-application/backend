import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LongTermQuest } from "./long-term-quest.entity";

@Entity()
export class PartialQuest {
    @PrimaryGeneratedColumn()
    id: number;

    @Index("idx_partial_quest_on_long_term_quest")
    @Column({ name: "long_term_quest_id" })
    longTermQuestId: number;

    @ManyToOne(() => LongTermQuest, longTermQuest => longTermQuest.partialQuests)
    @JoinColumn({ name: "long_term_quest_id" })
    longTermQuest: LongTermQuest;

    @Column({ name: "description" })
    description: string;

    @Column({ name: "is_completed", default: false })
    isCompleted: Boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
