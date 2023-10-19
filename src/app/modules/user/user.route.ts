import express from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.get("/",UserController.getUsers);
router.get("/my-profile",UserController.myProfile);
router.patch("/my-profile",UserController.updateMyProfile);
// router.get("/:id",UserController.getSingleUser);
// router.patch("/:id/update",UserController.updateUser);
router.delete("/:id/delete",UserController.deleteUser);

export const UserRoutes = router;
