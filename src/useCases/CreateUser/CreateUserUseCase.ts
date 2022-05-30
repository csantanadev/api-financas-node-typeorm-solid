import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export default class CreateUserUseCase {

    constructor(private createUserRepository: ICreateUserRepository) { }

    async execute(data: ICreateUserDTO) {

        const userExists = await this.createUserRepository.findByEmail(data.email);

        if (userExists) {
            throw new Error('User already exists.')
        }

        //const user = new User(null, data.name, data.email, data.password);
        const {name, email, password } = data

        await this.createUserRepository.create({name, email, password })
    }


}


