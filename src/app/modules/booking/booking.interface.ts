import { Types } from "mongoose";


// export type IBooking = {
//   user:Types.ObjectId;
//   services:Types.ObjectId[];
// };

export interface IBooking {
  _id?: string;
  userId?: Types.ObjectId;
  serviceId?: Types.ObjectId;
  name: string;

  category: string;
  image: string;
  price: string;
  date: string;
  slot: string;
}
