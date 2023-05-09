import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository";
import { UpdateTeamController } from "./UpdateSoccerGameController";
import { UpdateSoccerGameUseCase } from "./UpdateSoccerGameUseCase";

const repository = new inMemorySoccerGameRepository()

const useCase = new UpdateSoccerGameUseCase(repository)

const controller = new UpdateTeamController(useCase)

export { controller, useCase }