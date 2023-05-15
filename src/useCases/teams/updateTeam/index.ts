import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { PostgresTeamsRepository } from "../../../db/implementations/PostgresTeamRepository";
import { UpdateTeamController } from "./UpdateTeamController";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

const repository = new PostgresTeamsRepository()
const useCase = new UpdateTeamUseCase(repository)
const controllerUpdateTeam = new UpdateTeamController(useCase)

export { controllerUpdateTeam, useCase }