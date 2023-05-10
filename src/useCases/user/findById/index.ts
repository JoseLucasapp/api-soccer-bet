import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new inMemoryUserRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdUser = new FindByIdController(useCase)

export { controllerFindByIdUser, useCase }