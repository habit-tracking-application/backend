import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DailyQuest } from "./daily-quest.entity";
import { CreateDailyQuestCompletionPayload } from "./types/create-daily-quest-completion-payload.entity";

@Entity("daily_quest_completions")
export class DailyQuestCompletion {
    @PrimaryGeneratedColumn()
    id: number;

    @Index("idx_daily_quest_completion_on_daily_quest")
    @Column({ name: "daily_quest_id" })
    dailyQuestId: number;

    @ManyToOne(() => DailyQuest, dailyQuest => dailyQuest.completions)
    @JoinColumn({ name: "daily_quest_id" })
    dailyQuest: DailyQuest;

    @CreateDateColumn({ name: "completed_at" })
    completedAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor (payload?: CreateDailyQuestCompletionPayload) {
        this.dailyQuestId = payload?.dailyQuestId;
        this.dailyQuest = payload?.dailyQuest;
    }
}
