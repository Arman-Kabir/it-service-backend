import { NextFunction, Request, Response } from "express";

import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import { ServicesService } from "./services.service";

const getServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = pick(req.query, ["searchTerm", "minPrice", "maxPrice"]);
    // console.log(filters);

    const paginationOptions = pick(req.query, paginationFields);

    // console.log(paginationOptions);

    const result = await ServicesService.getServices(filters, paginationOptions);
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

const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const result = await ServicesService.createService(userData);
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

const getSingleService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await ServicesService.getSingleService(id);
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

const updateService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await ServicesService.updateService(id, updatedData);
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
const deleteService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await ServicesService.deleteService(id);
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

export const ServicesController={
  getServices,
  createService,
  getSingleService,
  updateService,
  deleteService
}
