import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository"
import { PostgresBetsRepository } from "../../../db/implementations/PostgresBetsRepository"
import { FindByUserIdController } from "./FindByUserIdController"
import { FindByUserIdUseCase } from "./FindByUserIdUseCase"

const repository = new PostgresBetsRepository()

const useCase = new FindByUserIdUseCase(repository)

const controllerFindByUserIdBet = new FindByUserIdController(useCase)

export { controllerFindByUserIdBet, useCase }