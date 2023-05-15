import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository"
import { PostgresUsersRepository } from "../../../db/implementations/PostgresUsersRepository"
import { LoginController } from "./LoginController"
import { LoginUseCase } from "./LoginUseCase"

const repository = new PostgresUsersRepository()

const useCase = new LoginUseCase(repository)

const controllerLogin = new LoginController(useCase)

export { controllerLogin, useCase }