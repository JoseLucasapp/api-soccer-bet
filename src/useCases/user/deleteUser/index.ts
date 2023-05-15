import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUsersRepository } from "../../../db/implementations/PostgresUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const repository = new PostgresUsersRepository()

const useCase = new DeleteUserUseCase(repository)

const controllerDeleteUser = new DeleteUserController(useCase)

export { controllerDeleteUser, useCase }