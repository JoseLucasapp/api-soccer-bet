import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository"
import { FindAllController } from "./FindAllController"
import { FindAllUseCase } from "./FindAllUseCase"

const repository = new inMemorySoccerGameRepository()

const useCase = new FindAllUseCase(repository)

const controller = new FindAllController(useCase)

export { controller, useCase }