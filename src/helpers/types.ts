export enum UserTypeEnum {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export enum MessageTextOptions {
    update = 'Updated',
    delete = 'Deleted',
    emailAlreadyUsed = 'Email Already Used',
    wPass = 'Wrong password',
    uNotFound = 'User not found',
    invalidToken = 'Invalid token',
    accessDenied = 'Access denied'
}

export interface AuthInterface {
    id: number
    email: string
    name: string
    role: UserTypeEnum
}