import { NextFunction, Request, Response } from "express";
import { BookingService } from "./booking.service";

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ordersData = req.body;
    const result = await BookingService.createBooking(ordersData);
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
    const result = await BookingService.getBooking(req.user);
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
    const orderId = req.params.id;
    const result = await BookingService.getSingleBooking(orderId);
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