import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository";
import { PostgresBetsRepository } from "../../../db/implementations/PostgresBetsRepository";
import { CreateBetController } from "./CreateBetController";
import { CreateBetUseCase } from "./CreateBetUseCase";

//const repository = new inMemoryBetRepository()
const repository = new PostgresBetsRepository()
const useCase = new CreateBetUseCase(repository)

const controllerCreateBet = new CreateBetController(useCase)

export { controllerCreateBet, useCase }