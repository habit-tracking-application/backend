import { User } from "src/users/entities/user.entity";
import { UserRepositoryInterface } from "../user-repository.interface";
import { Repository } from "typeorm";

export class UserRepository implements UserRepositoryInterface {
    constructor(
        private readonly repository: Repository<User>
    ) { }

    async save(user: User): Promise<User> {
        return this.repository.save(user);
    }

    async findById(id: number): Promise<User> {
        return this.repository.findOne({ where: { id: id } });
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ where: { email: email } });
    }
}
