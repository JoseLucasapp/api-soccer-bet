import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const repository = new inMemoryUserRepository()

const useCase = new CreateUserUseCase(repository)

const controllerCreateUser = new CreateUserController(useCase)

export { controllerCreateUser, useCase }