import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { UpdateTeamController } from "./UpdateTeamController";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

const repository = new inMemoryTeamsRepository()
const useCase = new UpdateTeamUseCase(repository)
const controllerUpdateTeam = new UpdateTeamController(useCase)

export { controllerUpdateTeam, useCase }