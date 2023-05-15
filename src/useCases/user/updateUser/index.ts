import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUsersRepository } from "../../../db/implementations/PostgresUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const repository = new PostgresUsersRepository()
const useCase = new UpdateUserUseCase(repository)
const controllerUpdateUser = new UpdateUserController(useCase)

export { controllerUpdateUser, useCase }