import { User } from "../entities/User";

export interface ICreateUserRepository {

    save(user: User): Promise<void>;
    findByEmail(email: string) : Promise<User>


}