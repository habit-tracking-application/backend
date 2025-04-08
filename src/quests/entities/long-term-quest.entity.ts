import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateLongTermQuestPayload, LongTermQuestType } from "./types/create-long-term-quest-payload.type";
import { PartialQuest } from "./partial-quest.entity";

@Entity("long_term_quests")
export class LongTermQuest {
    @PrimaryGeneratedColumn()
    id: number;

    @Index("idx_long_term_quest_on_quest")
    @Column({ name: "quest_id" })
    questId: number;

    @Column({ name: "type", type: "enum", enum: LongTermQuestType })
    type: LongTermQuestType;

    @Column({ name: "goal_date" })
    goalDate: Date;

    @Column({ name: "is_completed", default: false })
    isCompleted: Boolean;

    @OneToMany(() => PartialQuest, partialQuest => partialQuest.longTermQuest, { cascade: true, onDelete: "CASCADE" })
    partialQuests: PartialQuest[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor(payload?: CreateLongTermQuestPayload) {
        this.goalDate = payload?.goalDate;
        this.partialQuests = [];
        this.questId = payload?.questId;
        this.type = payload?.type;
    }
}
