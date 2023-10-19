import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    services: [
      {
        serviceId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Services",
        },
        date: {
          type: String
        },
        slot: {
          type: String
        }
      },
    ],
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
