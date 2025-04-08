import { UseCase } from "src/common/usecase.common";
import { LongTermQuestType } from "src/quests/entities/types/create-long-term-quest-payload.type";
import { SaveQuestPort } from "./save-quest.usecase";

export type SaveLongTermQuestPort = {
    type: LongTermQuestType;
    goalDate: Date;
    questInfo: SaveQuestPort
}

export interface SaveLongTermQuestUseCase extends UseCase<SaveLongTermQuestPort, void> {}