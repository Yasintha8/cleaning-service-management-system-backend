import express from "express";
import { createService, deleteService, getServiceById, getServices, updateService } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/", createService)
serviceRouter.get("/",getServices)
serviceRouter.get("/:Id",getServiceById)
serviceRouter.delete("/:serviceId",deleteService)
serviceRouter.put("/:serviceId",updateService)

export default serviceRouter;