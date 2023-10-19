import { Types } from "mongoose";


export type IBooking = {
  user:Types.ObjectId;
  services:Types.ObjectId[];
};
