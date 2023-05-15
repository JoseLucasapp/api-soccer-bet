import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository";
import { PostgresSoccerGameRepository } from "../../../db/implementations/PostgresSoccerGameRepository";
import { UpdateSoccerGameController } from "./UpdateSoccerGameController";
import { UpdateSoccerGameUseCase } from "./UpdateSoccerGameUseCase";

const repository = new PostgresSoccerGameRepository()

const useCase = new UpdateSoccerGameUseCase(repository)

const controllerUpdateSoccerGame = new UpdateSoccerGameController(useCase)

export { controllerUpdateSoccerGame, useCase }