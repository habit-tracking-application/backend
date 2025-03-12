import { NotFoundException } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UserRepositoryInterface } from "../repositories/user-repository.interface";
import { FindUserByEmailPort, FindUserByEmailUseCase } from "./usecases/find-user-by-email.usecase";

export class FindUserByEmailService implements FindUserByEmailUseCase {
    constructor (
        private readonly userRepository: UserRepositoryInterface
    ) {}
    
    async execute(payload?: FindUserByEmailPort): Promise<User> {
        const user: User = await this.userRepository.findByEmail(payload.email);
        if (!user) throw new NotFoundException();
        
        return user;
    }
}
