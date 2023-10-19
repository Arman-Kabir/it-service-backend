import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>(
  {

    userId: {
      type: Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      // required: true,
      ref: "Services",
    },
    name: {
      type: String
    },
    category: {
      type: String
    },
    image: {
      type: String
    },   
    price: {
      type: String
    },
    date: {
      type: String
    },
    slot: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// 3. Create a Model.
export const Booking = model<IBooking>("Booking", bookingSchema);
