import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository"
import { FindByIdController } from "./FindByIdController"
import { FindByIdUseCase } from "./FindByIdUseCase"

const repository = new inMemoryTeamsRepository()

const findByIdUseCase = new FindByIdUseCase(repository)

const findByIdController = new FindByIdController(findByIdUseCase)

export { findByIdController, findByIdUseCase }