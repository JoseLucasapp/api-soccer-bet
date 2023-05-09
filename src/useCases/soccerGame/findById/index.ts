import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new inMemorySoccerGameRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdSoccerGame = new FindByIdController(useCase)

export { controllerFindByIdSoccerGame, useCase }