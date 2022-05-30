import { User } from "../entities/User";
import { ICreateUserDTO } from "../useCases/CreateUser/ICreateUserDTO";

export interface ICreateUserRepository {

    create(user: ICreateUserDTO ): Promise<void>;

    findByEmail(email: string) : Promise<User>;


}