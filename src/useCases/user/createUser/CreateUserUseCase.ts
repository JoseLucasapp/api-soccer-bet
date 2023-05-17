import { User } from "../../../entities/user";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserAttributesRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUserRepository) { }

    async execute(data: ICreateUserAttributesRequestDTO) {
        console.log(data)
        const user = new User(data)

        console.log(user)

        await this.usersRepository.save(user)
    }
}