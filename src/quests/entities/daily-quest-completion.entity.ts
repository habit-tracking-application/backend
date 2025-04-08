import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DailyQuest } from "./daily-quest.entity";
import { CreateDailyQuestCompletionPayload } from "./types/create-daily-quest-completion-payload.type";

@Entity("daily_quest_completions")
export class DailyQuestCompletion {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => DailyQuest, dailyQuest => dailyQuest.completions)
    dailyQuest: DailyQuest;

    @CreateDateColumn({ name: "completed_at" })
    completedAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor (payload?: CreateDailyQuestCompletionPayload) {
        this.dailyQuest = payload?.dailyQuest;
    }
}
