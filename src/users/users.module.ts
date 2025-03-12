import { Module, Provider } from "@nestjs/common";
import { UserDiTokens } from "./di/user-tokens.di";
import { DataSource, Repository } from "typeorm";
import { DatabaseDiTokens } from "src/infrastructure/database/di/database-tokens.di";
import { User } from "./entities/user.entity";
import { UserRepository } from "./repositories/mysql/user.repository";
import { UserRepositoryInterface } from "./repositories/user-repository.interface";
import { FindUserByIdService } from "./services/find-user-by-id.service";
import { SaveUserService } from "./services/save-user.service";

const repositoryProviders: Array<Provider> = [
    {
        provide: UserDiTokens.MySQLUserRepositoryInterface,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [DatabaseDiTokens.MySQLDataSource]
    },
    {
        provide: UserDiTokens.UserRepositoryInterface,
        useFactory: (repository: Repository<User>) => new UserRepository(repository),
        inject: [UserDiTokens.MySQLUserRepositoryInterface]
    }
];

const serviceProviders: Array<Provider> = [
    {
        provide: UserDiTokens.FindUserByIdService,
        useFactory: (userRepository: UserRepositoryInterface) => new FindUserByIdService(userRepository),
        inject: [UserDiTokens.UserRepositoryInterface]
    },
    {
        provide: UserDiTokens.SaveUserService,
        useFactory: (userRepository: UserRepositoryInterface) => new SaveUserService(userRepository),
        inject: [UserDiTokens.UserRepositoryInterface]
    }
];

@Module({
    providers: [...repositoryProviders, ...serviceProviders],
    exports: [UserDiTokens.FindUserByIdService, UserDiTokens.SaveUserService]
})
export class UsersModule {}