import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository"
import { PostgresBetsRepository } from "../../../db/implementations/PostgresBetsRepository"
import { FindAllController } from "./FindAllController"
import { FindAllUseCase } from "./FindAllUseCase"

const repository = new PostgresBetsRepository()

const useCase = new FindAllUseCase(repository)

const controllerFindAllBet = new FindAllController(useCase)

export { controllerFindAllBet, useCase }