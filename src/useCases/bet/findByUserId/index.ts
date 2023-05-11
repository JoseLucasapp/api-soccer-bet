import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository"
import { FindByUserIdController } from "./FindByUserIdController"
import { FindByUserIdUseCase } from "./FindByUserIdUseCase"

const repository = new inMemoryBetRepository()

const useCase = new FindByUserIdUseCase(repository)

const controllerFindByUserIdBet = new FindByUserIdController(useCase)

export { controllerFindByUserIdBet, useCase }