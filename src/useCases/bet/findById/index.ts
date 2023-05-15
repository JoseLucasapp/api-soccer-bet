import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository"
import { PostgresBetsRepository } from "../../../db/implementations/PostgresBetsRepository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new PostgresBetsRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdBet = new FindByIdController(useCase)

export { controllerFindByIdBet, useCase }