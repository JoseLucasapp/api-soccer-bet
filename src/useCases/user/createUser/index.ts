import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUsersRepository } from "../../../db/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const repository = new PostgresUsersRepository()

const useCase = new CreateUserUseCase(repository)

const controllerCreateUser = new CreateUserController(useCase)

export { controllerCreateUser, useCase }