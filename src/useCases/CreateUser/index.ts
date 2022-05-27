import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";
import CreateUserRepositoryTypeOrm from "../../repositories/implementations/CreateUserRepositoryTypeOrm";


const createUserRepository = new CreateUserRepositoryTypeOrm();

const createUserUseCase = new CreateUserUseCase(createUserRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }

