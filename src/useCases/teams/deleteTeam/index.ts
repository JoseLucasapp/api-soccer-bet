import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { DeleteTeamController } from "./DeleteTeamController";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

const repository = new inMemoryTeamsRepository()

const useCase = new DeleteTeamUseCase(repository)

const controllerDeleteTeam = new DeleteTeamController(useCase)

export { controllerDeleteTeam, useCase }