import { UseCase } from "src/common/usecase.common";
import { User } from "src/users/entities/user.entity";

export type SaveUserPort = {
    username: string;
    password: string;
    email: string;
}

export interface SaveUserUseCase extends UseCase<SaveUserPort, User> {}
