import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository"
import { PostgresSoccerGameRepository } from "../../../db/implementations/PostgresSoccerGameRepository"
import { FindAllController } from "./FindAllController"
import { FindAllUseCase } from "./FindAllUseCase"

const repository = new PostgresSoccerGameRepository()

const useCase = new FindAllUseCase(repository)

const controllerFindAllSoccerGame = new FindAllController(useCase)

export { controllerFindAllSoccerGame, useCase }