import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository"
import { FindAllController } from "./FindAllController"
import { FindAllUseCase } from "./FindAllUseCase"

const repository = new inMemoryUserRepository()

const useCase = new FindAllUseCase(repository)

const controllerFindAllUser = new FindAllController(useCase)

export { controllerFindAllUser, useCase }