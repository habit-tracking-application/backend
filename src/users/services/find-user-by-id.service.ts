import { NotFoundException } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UserRepositoryInterface } from "../repositories/user-repository.interface";
import { FindUserByIdPort, FindUserByIdUseCase } from "./usecases/find-user-by-id.usecase";

export class FindUserByIdService implements FindUserByIdUseCase {
    constructor (
        private readonly userRepository: UserRepositoryInterface
    ) {}
    
    async execute(payload?: FindUserByIdPort): Promise<User> {
        const user: User = await this.userRepository.findById(payload.userId);
        if (!user) throw new NotFoundException();

        return user;
    }
}
