import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository";
import { CreateSoccerGameController } from "./CreateSoccerGameController";
import { CreateSoccerGameUseCase } from "./CreateSoccerGameUseCase";

const repository = new inMemorySoccerGameRepository()

const useCase = new CreateSoccerGameUseCase(repository)

const controller = new CreateSoccerGameController(useCase)

export { controller, useCase }