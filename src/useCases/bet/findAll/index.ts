import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository"
import { FindAllController } from "./FindAllController"
import { FindAllUseCase } from "./FindAllUseCase"

const repository = new inMemoryBetRepository()

const useCase = new FindAllUseCase(repository)

const controllerFindAllBet = new FindAllController(useCase)

export { controllerFindAllBet, useCase }