import { NextFunction, Request, Response } from "express";
import { createOrdersService, getOrdersService, getSingleOrderService } from "./booking.service";

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ordersData = req.body;
    const result = await createOrdersService(ordersData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log(req.user);
    const result = await getOrdersService(req.user);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "booking retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log(req.user);
    const orderId = req.params;
    const result = await getSingleOrderService(orderId, req.user);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BookingController = {
  createBooking,
  getBooking,
  getSingleBooking
}