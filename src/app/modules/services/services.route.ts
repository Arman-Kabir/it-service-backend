import express from "express";
import { ServicesController } from "./services.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/", ServicesController.createService);
router.get("/", ServicesController.getServices);
router.get("/:id", ServicesController.getSingleService);
router.post("/:id/review", ServicesController.addReview);
router.patch("/:id/update", ServicesController.updateService);
router.delete("/:id/delete", ServicesController.deleteService);

export const ServicesRoutes = router;
