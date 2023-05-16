import { createHash as cryptoCreateHash } from 'crypto'

const HASHCODE = (process.env.HASHCODE as string);

export const randomNum = (max: number, min = 0) => Math.floor(Math.random() * max) + min;

export const createHashData = (value: string) => {
    return cryptoCreateHash(HASHCODE).update(value).digest('hex')
}