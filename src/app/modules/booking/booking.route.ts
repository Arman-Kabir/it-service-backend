import express from "express";
import { BookingController } from "./booking.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/", BookingController.createBooking);
router.get("/", BookingController.getBooking);
router.get("/:id", BookingController.getSingleBooking);


export const BookingRoutes = router;
