import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DailyQuestCompletion } from "./daily-quest-completion.entity";

@Entity("daily_quests")
export class DailyQuest {
    @PrimaryGeneratedColumn()
    id: number;

    @Index("idx_daily_quest_on_quest")
    @Column({ name: "quest_id" })
    questId: number;

    @Column({ name: "streak" })
    streak: number;

    @Column({ name: "number_of_times_completed" })
    numberOfTimesCompleted: number;

    @OneToMany(() => DailyQuestCompletion, completion => completion.dailyQuest)
    completions: DailyQuestCompletion[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
