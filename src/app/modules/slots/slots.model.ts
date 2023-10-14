import { Schema, model } from "mongoose";
import { ISlots } from "./slots.interface";
import { Category } from "./slots.constant";

const slotsSchema = new Schema<ISlots>(
  {
    name: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
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
export const Slots = model<ISlots>("Slots", slotsSchema);
