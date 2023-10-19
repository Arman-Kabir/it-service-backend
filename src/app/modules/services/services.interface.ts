import { Types } from "mongoose";

type Category = "Repair" | "Service";

export type IServices = {
  id: number;
  name: string;
  price: number;
  image?:string;
  description: string;
  rating?: number;
  reviews?: string[];
  category: Category;
};

export type IFilters = {
  searchTerm?: string;
  minPrice?: Number;
  maxPrice?: Number;
  location?: String;
};
