import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository";
import { DeleteBetController } from "./DeleteBetController";
import { DeleteBetUseCase } from "./DeleteBetUseCase";

const repository = new inMemoryBetRepository()

const useCase = new DeleteBetUseCase(repository)

const controllerDeleteBet = new DeleteBetController(useCase)

export { controllerDeleteBet, useCase }