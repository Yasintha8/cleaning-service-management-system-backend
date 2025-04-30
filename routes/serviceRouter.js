import express from "express";
import { createService, deleteService, getServiceById, getServices, updateService } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/", createService)
serviceRouter.get("/",getServices)
serviceRouter.get("/:_id",getServiceById)
serviceRouter.delete("/:_id",deleteService)
serviceRouter.put("/:_id",updateService)

export default serviceRouter;