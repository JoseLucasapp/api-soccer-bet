import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { PostgresTeamsRepository } from "../../../db/implementations/PostgresTeamRepository";
import { DeleteTeamController } from "./DeleteTeamController";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

const repository = new PostgresTeamsRepository()

const useCase = new DeleteTeamUseCase(repository)

const controllerDeleteTeam = new DeleteTeamController(useCase)

export { controllerDeleteTeam, useCase }