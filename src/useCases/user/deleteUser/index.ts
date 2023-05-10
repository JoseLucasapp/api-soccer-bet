import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const repository = new inMemoryUserRepository()

const useCase = new DeleteUserUseCase(repository)

const controllerDeleteUser = new DeleteUserController(useCase)

export { controllerDeleteUser, useCase }