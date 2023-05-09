import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new inMemoryTeamsRepository()

const useCase = new FindByIdUseCase(repository)

const controller = new FindByIdController(useCase)

export { controller, useCase }