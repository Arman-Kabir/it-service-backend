import { Schema, model } from "mongoose";
import { IServices } from "./services.interface";
import { Category } from "./services.constant";

const servicesSchema = new Schema<IServices>(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rating:{
      type:Number, 
    },
    reviews:[{
      type:String
    }],
    category: {
      type: String,
      enum: Category,
      required: true
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot'
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
export const Services = model<IServices>("Services", servicesSchema);
