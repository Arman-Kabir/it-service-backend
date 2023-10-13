import { Schema, model } from "mongoose";
import { ICows } from "./services.interface";
import { Breed, Category, Label, Location } from "./services.constant";

const cowsSchema = new Schema<ICows>(
  {
    name: {
      type:String,
      required:true
    },
  age: {
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  location: {
    type:String,
    enum:Location,
    required:true
  },
  breed:{
    type:String,
    enum:Breed,
    required:true
  },
  weight:{
    type:Number,
    required:true
  },
  label: {
    type:String,
    enum:Label,
    required:true
  },
  category:{
    type:String,
    enum:Category,
    required:true
  },
  seller:{
    type:Schema.Types.ObjectId,
    ref:'User'
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
export const Cows = model<ICows>("Cows", cowsSchema);
