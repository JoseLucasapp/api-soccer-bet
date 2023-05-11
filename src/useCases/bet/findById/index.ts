import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new inMemoryBetRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdBet = new FindByIdController(useCase)

export { controllerFindByIdBet, useCase }