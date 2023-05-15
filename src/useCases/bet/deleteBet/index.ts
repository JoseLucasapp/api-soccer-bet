import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository";
import { PostgresBetsRepository } from "../../../db/implementations/PostgresBetsRepository";
import { DeleteBetController } from "./DeleteBetController";
import { DeleteBetUseCase } from "./DeleteBetUseCase";

const repository = new PostgresBetsRepository()

const useCase = new DeleteBetUseCase(repository)

const controllerDeleteBet = new DeleteBetController(useCase)

export { controllerDeleteBet, useCase }