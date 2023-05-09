import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository";
import { UpdateSoccerGameController } from "./UpdateSoccerGameController";
import { UpdateSoccerGameUseCase } from "./UpdateSoccerGameUseCase";

const repository = new inMemorySoccerGameRepository()

const useCase = new UpdateSoccerGameUseCase(repository)

const controllerUpdateSoccerGame = new UpdateSoccerGameController(useCase)

export { controllerUpdateSoccerGame, useCase }