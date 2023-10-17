import express from "express";
import { BlogsController } from "./blogs.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/", BlogsController.createBlog);
router.get("/", BlogsController.getBlogs);
router.get("/:id", BlogsController.getSingleBlog);
router.patch("/:id", BlogsController.updateBlog);
router.delete("/:id", BlogsController.deleteBlog);

export const BlogsRoutes = router;
