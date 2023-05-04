import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { DeleteTeamController } from "./DeleteTeamController";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

const repository = new inMemoryTeamsRepository()

const deleteTeamUseCase = new DeleteTeamUseCase(repository)

const deleteTeamController = new DeleteTeamController(deleteTeamUseCase)

export { deleteTeamController, deleteTeamUseCase }