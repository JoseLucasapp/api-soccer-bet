import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository"
import { PostgresUsersRepository } from "../../../db/implementations/PostgresUsersRepository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new PostgresUsersRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdUser = new FindByIdController(useCase)

export { controllerFindByIdUser, useCase }