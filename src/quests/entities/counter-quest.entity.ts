import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DailyCounterForCounterQuests } from "./daily-counter-for-counter-quest.entity";

@Entity("counter_quests")
export class CounterQuest {
    @PrimaryGeneratedColumn()
    id: number;

    @Index("idx_counter_quest_on_quest")
    @Column({ name: "quest_id" })
    questId: number;

    @Column({ name: "goal_counter" })
    goalCounter: number;

    @Column({ name: "streak" })
    streak: number;

    @Column({ name: "longest_streak" })
    longestStreak: number;

    @OneToMany(() => DailyCounterForCounterQuests, dailyCounter => dailyCounter.counterQuest)
    dailyCounters: DailyCounterForCounterQuests[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
