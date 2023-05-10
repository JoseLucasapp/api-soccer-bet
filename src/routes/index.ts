import { Router } from "express";
import soccerGame from "./soccerGame";
import teams from "./teams";
import user from "./user";

const router = Router()

soccerGame(router)
teams(router)
user(router)

export { router }