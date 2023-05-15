import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { PostgresTeamsRepository } from "../../../db/implementations/PostgresTeamRepository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const repository = new PostgresTeamsRepository()

const useCase = new CreateTeamUseCase(repository)

const controllerCreateTeam = new CreateTeamController(useCase)

export { controllerCreateTeam, useCase }