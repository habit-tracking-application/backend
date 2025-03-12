import { User } from "../entities/user.entity";

export interface UserRepositoryInterface {
    save(user: User): Promise<User>;
    findById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
}