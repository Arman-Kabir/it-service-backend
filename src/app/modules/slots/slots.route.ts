import express from "express";
import { SlotsController } from "./slots.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/", SlotsController.createSlot);
router.get("/", SlotsController.getSlots);
router.get("/:id", SlotsController.getSingleSlot);
router.patch("/:id", SlotsController.updateSlot);
router.delete("/:id", SlotsController.deleteSlot);

export const SlotsRoutes = router;
