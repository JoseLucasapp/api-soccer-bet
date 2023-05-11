import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository";
import { CreateBetController } from "./CreateBetController";
import { CreateBetUseCase } from "./CreateBetUseCase";

const repository = new inMemoryBetRepository()

const useCase = new CreateBetUseCase(repository)

const controllerCreateBet = new CreateBetController(useCase)

export { controllerCreateBet, useCase }