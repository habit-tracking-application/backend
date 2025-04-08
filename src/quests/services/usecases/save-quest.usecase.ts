import { UseCase } from "src/common/usecase.common";
import { Quest } from "src/quests/entities/quest.entity";

export type SaveQuestPort = {
    name: string;
    description: string;
    userId: number;
    experience: number;
}

export interface SaveQuestUseCase extends UseCase<SaveQuestPort, Quest> {}
