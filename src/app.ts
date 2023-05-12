import express from 'express'

import { router } from './routes'
import db from './db/connection'

db.authenticate()
db.sync().then(() => console.log('Connected'))

const app = express()

app.use(express.json())
app.use(router)

export { app }
