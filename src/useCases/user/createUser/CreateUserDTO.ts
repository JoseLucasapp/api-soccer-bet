import { UserTypeEnum } from "../../../helpers/types";

export interface ICreateUserAttributesRequestDTO {
    username: string;
    password: string;
    email: string;
    points?: number;
    wins?: number;
    role: UserTypeEnum;
}