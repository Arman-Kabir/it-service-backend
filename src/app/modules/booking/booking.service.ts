
import mongoose from "mongoose";
import ApiError from "../../../errors/ApiError";
import globalErrorHandler from "../../middlewares/globalErrorHandler";
import { User } from "../user/user.model";
import { Booking } from "./booking.model";

const createBooking = async (payload: any) => {
  try {
    const result = await Booking.create(payload);
    return result;
  } catch (error) {
    throw error;
  }
};

const getBooking = async (userData: any) => {
  const result = await Booking.find({});
  return result;

};

const getSingleBooking = async (bookingId: any, userData: any) => {
  
    const data = await Booking.find({ _id:bookingId }).populate(["user", "services"]);
    return data;
};

export const BookingService = {
  createBooking,
  getBooking,
  getSingleBooking
}
