import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository"
import { PostgresUsersRepository } from "../../../db/implementations/PostgresUsersRepository"
import { FindAllController } from "./FindAllUsersController"
import { FindAllUseCase } from "./FindAllUsersUseCase"

const repository = new PostgresUsersRepository()

const useCase = new FindAllUseCase(repository)

const controllerFindAllUser = new FindAllController(useCase)

export { controllerFindAllUser, useCase }