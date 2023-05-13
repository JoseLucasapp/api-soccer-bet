import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository"
import { LoginController } from "./LoginController"
import { LoginUseCase } from "./LoginUseCase"

const repository = new inMemoryUserRepository()

const useCase = new LoginUseCase(repository)

const controllerLogin = new LoginController(useCase)

export { controllerLogin, useCase }