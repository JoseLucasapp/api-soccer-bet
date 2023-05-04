import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { UpdateTeamController } from "./UpdateTeamController";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

const repository = new inMemoryTeamsRepository()
const updateTeamUseCase = new UpdateTeamUseCase(repository)
const updateTeamController = new UpdateTeamController(updateTeamUseCase)

export { updateTeamController, updateTeamUseCase }