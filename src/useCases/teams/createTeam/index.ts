import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const repository = new inMemoryTeamsRepository()

const useCase = new CreateTeamUseCase(repository)

const controllerCreateTeam = new CreateTeamController(useCase)

export { controllerCreateTeam, useCase }