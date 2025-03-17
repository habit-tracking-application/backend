import { Provider } from "@nestjs/common";
import { DatabaseDiTokens } from "../di/database-tokens.di";
import { DataSource } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Quest } from "src/quests/entities/quest.entity";
import { CounterQuest } from "src/quests/entities/counter-quest.entity";
import { DailyQuest } from "src/quests/entities/daily-quest.entity";
import { DailyCounterForCounterQuests } from "src/quests/entities/daily-counter-for-counter-quest.entity";
import { DailyQuestCompletion } from "src/quests/entities/daily-quest-completion.entity";
import { LongTermQuest } from "src/quests/entities/long-term-quest.entity";
import { PartialQuest } from "src/quests/entities/partial-quest.entity";

export const databaseProviders: Array<Provider> = [
    {
        provide: DatabaseDiTokens.MySQLDataSource,
        useFactory: () => {
            const dataSource: DataSource = new DataSource({
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                port: parseInt(process.env.MYSQL_PORT),
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DB_NAME,
                entities: [
                    User,
                    Quest,
                    CounterQuest,
                    DailyQuest,
                    DailyCounterForCounterQuests,
                    DailyQuestCompletion,
                    LongTermQuest,
                    PartialQuest
                ],
                synchronize: true,
                logging: process.env.NODE_ENV === 'development',
            });
        
            return dataSource.initialize();
        }
    }
]
