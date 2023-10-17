import { NextFunction, Request, Response } from "express";

import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import { BlogsService } from "./blogs.service";

const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = pick(req.query, ["searchTerm", "minPrice", "maxPrice"]);
    // console.log(filters);

    const paginationOptions = pick(req.query, paginationFields);

    // console.log(paginationOptions);

    const result = await BlogsService.getBlogs(filters, paginationOptions);
    // const result = await getCowsService( );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Services retrieved successfully",
      meta:result.meta,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};

const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const result = await BlogsService.createBlog(userData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await BlogsService.getSingleBlog(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await BlogsService.updateBlog(id, updatedData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await BlogsService.deleteBlog(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BlogsController={
  getBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog
}
