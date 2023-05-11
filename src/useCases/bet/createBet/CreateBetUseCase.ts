import { Bet } from "../../../entities/bet";
import { IBetRepository } from "../../../repositories/IBetRepository";
import { ICreateBetAttributesRequestDTO } from "./CreateBetDTO";

export class CreateBetUseCase {
    constructor(private betRepository: IBetRepository) { }

    async execute(data: ICreateBetAttributesRequestDTO) {
        const bet = new Bet(data)

        await this.betRepository.save(bet)
    }
}