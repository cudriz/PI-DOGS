const {Router} = require("express")
const { getIdHandler, getNameHandler, getBreed, createHandler } = require("../handlers/dogsHandler");

const dogsRouter = Router();



dogsRouter.get("/", getBreed )



dogsRouter.get("/:id", getIdHandler)



dogsRouter.get("/search/name", getNameHandler )



dogsRouter.post("/", createHandler)

module.exports =  dogsRouter

