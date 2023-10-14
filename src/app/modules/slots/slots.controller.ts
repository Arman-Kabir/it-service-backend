import { NextFunction, Request, Response } from "express";

import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import {  SlotsService } from "./slots.service";

const getSlots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = pick(req.query, ["searchTerm", "minPrice", "maxPrice"]);
    // console.log(filters);

    const paginationOptions = pick(req.query, paginationFields);

    // console.log(paginationOptions);

    const result = await SlotsService.getSlots(filters, paginationOptions);
    // const result = await getCowsService( );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cows retrieved successfully",
      meta:result.meta,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};

const createSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const result = await SlotsService.createSlot(userData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cows created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await SlotsService.getSingleSlot(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cow retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    console.log(req.user);
    // console.log(id, updatedData);    
    const result = await SlotsService.updateSlot(id, updatedData,req.user);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cow updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    // console.log(id,req.user);
    const result = await SlotsService.deleteSlot(id,req.user);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cow deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const SlotsController={
  getSlots,
  createSlot,
  getSingleSlot,
  updateSlot,
  deleteSlot
}
