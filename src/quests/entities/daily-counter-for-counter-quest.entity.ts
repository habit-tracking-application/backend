import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CounterQuest } from "./counter-quest.entity";
import { CreateDailyCounterForCounterQuestsPaylaod } from "./types/create-daily-counter-for-counter-quest-payload.type";

@Entity("daily_counters_for_counter_quests")
export class DailyCounterForCounterQuests {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CounterQuest, counterQuest => counterQuest.dailyCounters)
    counterQuest: CounterQuest;

    @Column({ name: "current_counter", default: 0 })
    currentCounter: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor (payload?: CreateDailyCounterForCounterQuestsPaylaod) {
        this.counterQuest = payload?.counterQuest;
    }
}
