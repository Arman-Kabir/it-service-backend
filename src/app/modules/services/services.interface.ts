import { Types } from "mongoose";

type Category = "Repair" | "Services";

export type IServices = {
  name: string;
  price: number;
  description: string;
  rating?: number;
  reviews?:string[];
  category: Category;
  slot: Types.ObjectId;
};

export type IFilters = {
  searchTerm?: string;
  minPrice?: Number;
  maxPrice?: Number;
  location?: String;
};
