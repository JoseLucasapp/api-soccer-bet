import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository"
import { FindAllController } from "./FindAllController"
import { FindAllUseCase } from "./FindAllUseCase"

const repository = new inMemorySoccerGameRepository()

const useCase = new FindAllUseCase(repository)

const controllerFindAllSoccerGame = new FindAllController(useCase)

export { controllerFindAllSoccerGame, useCase }