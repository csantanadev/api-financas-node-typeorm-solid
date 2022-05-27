import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export default class CreateUserUseCase {

    constructor(private createUserRepository: ICreateUserRepository) { }

    async execute(data: CreateUserDTO) {

        const userExists = await this.createUserRepository.findByEmail(data.email);

        if (userExists) {
            throw new Error('User already exists.')
        }

        const user = new User(null, data.name, data.email, data.password);

        await this.createUserRepository.save(user)
    }


}


