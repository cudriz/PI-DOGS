const { Router } = require("express");
const { getTemperaments } = require("../handlers/dogsHandler");

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperaments);

module.exports = temperamentsRouter;
