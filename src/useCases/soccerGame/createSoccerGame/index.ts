import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository";
import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { CreateSoccerGameController } from "./CreateSoccerGameController";
import { CreateSoccerGameUseCase } from "./CreateSoccerGameUseCase";

const repositorySoccerGame = new inMemorySoccerGameRepository()
const repositoryTeams = new inMemoryTeamsRepository()

const useCase = new CreateSoccerGameUseCase(repositorySoccerGame, repositoryTeams)

const controllerCreateSoccerGame = new CreateSoccerGameController(useCase)

export { controllerCreateSoccerGame, useCase }