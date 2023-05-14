import { Router } from "express";
import soccerGame from "./soccerGame";
import teams from "./teams";
import user from "./user";
import bet from "./bet";

const router = Router()

soccerGame(router)
teams(router)
user(router)
bet(router)

export { router }