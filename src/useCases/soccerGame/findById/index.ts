import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository"
import { PostgresSoccerGameRepository } from "../../../db/implementations/PostgresSoccerGameRepository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new PostgresSoccerGameRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdSoccerGame = new FindByIdController(useCase)

export { controllerFindByIdSoccerGame, useCase }