import express from "express";
import { ServicesController } from "./services.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/", ServicesController.createService);
router.get("/", ServicesController.getServices);
router.get("/:id", ServicesController.getSingleService);
router.patch("/:id", ServicesController.updateService);
router.delete("/:id", ServicesController.deleteService);

export const ServicesRoutes = router;
