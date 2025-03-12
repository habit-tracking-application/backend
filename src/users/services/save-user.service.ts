import { User } from "../entities/user.entity";
import { UserRepositoryInterface } from "../repositories/user-repository.interface";
import { SaveUserPort, SaveUserUseCase } from "./usecases/save-user.usecase";

export class SaveUserService implements SaveUserUseCase {
    constructor (
        private readonly userRepository: UserRepositoryInterface
    ) {}
    
    async execute(payload?: SaveUserPort): Promise<User> {
        const newUser: User = new User(payload);
        return await this.userRepository.save(newUser);
    }
}
