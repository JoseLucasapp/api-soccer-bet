import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const repository = new inMemoryUserRepository()
const useCase = new UpdateUserUseCase(repository)
const controllerUpdateUser = new UpdateUserController(useCase)

export { controllerUpdateUser, useCase }