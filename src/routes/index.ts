import { Router } from "express";
import soccerGame from "./soccerGame";
import teams from "./teams";

const router = Router()

soccerGame(router)
teams(router)

export { router }