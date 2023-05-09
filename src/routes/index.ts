import { Router } from "express";
import soccerGame from "./soccerGame";

const router = Router()

soccerGame(router)

export { router }