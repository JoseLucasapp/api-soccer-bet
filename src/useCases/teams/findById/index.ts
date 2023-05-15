import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository"
import { PostgresTeamsRepository } from "../../../db/implementations/PostgresTeamRepository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new PostgresTeamsRepository()

const useCase = new FindByIdUseCase(repository)

const controllerFindByIdTeam = new FindByIdController(useCase)

export { controllerFindByIdTeam, useCase }