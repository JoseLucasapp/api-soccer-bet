import { createHash } from 'crypto'

export const randomNum = (max: number, min = 0) => Math.floor(Math.random() * max) + min;

export const createHashData = (value: string) => {
    console.log('value', createHash('sha256').update(value).digest('hex'))
    return createHash('sha256').update(value).digest('hex')
}