import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const repository = new inMemoryTeamsRepository()

const createTeamUseCase = new CreateTeamUseCase(repository)

const createTeamController = new CreateTeamController(createTeamUseCase)

export { createTeamController, createTeamUseCase }