
import mongoose from "mongoose";
import ApiError from "../../../errors/ApiError";
import globalErrorHandler from "../../middlewares/globalErrorHandler";
import { User } from "../user/user.model";
import { Booking } from "./booking.model";

const createBooking = async (payload: any) => {
  try {
    console.log(payload);
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

const getSingleBooking = async (bookingId: any) => {
  // console.log(bookingId);
  // .populate(["user", "services"])
    const data = await Booking.find({ _id:bookingId }).populate(["userId", "serviceId"]);
    return data;
};

export const BookingService = {
  createBooking,
  getBooking,
  getSingleBooking
}
