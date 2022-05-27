import { User } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export default class CreateUserRepositoryTypeOrm implements ICreateUserRepository {

    private users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user)
    }

    async findByEmail(email: string): Promise<User> {

        const user = this.users.find(user => user.email === email);
        return user;

    }

}