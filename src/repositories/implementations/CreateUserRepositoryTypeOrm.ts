import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../useCases/CreateUser/ICreateUserDTO";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { getRepository } from 'typeorm'
import bcryptjs from 'bcryptjs'


export default class CreateUserRepositoryTypeOrm implements ICreateUserRepository {

    async create(userData: ICreateUserDTO): Promise<void> {

        const userRepository = getRepository(User);

        const passwordHash = await bcryptjs.hash(userData.password, 8)

        const userBD = {...userData, password: passwordHash}

        await userRepository.save(userBD)

    }

    async findByEmail(email: string): Promise<User> {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ where: { email } })
        
        return user;
    }

}