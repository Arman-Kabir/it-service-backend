import { Types } from "mongoose";

type Category = "Repair" | "Services";

export type ISlots = {
  name: string;
  startTime:string;
  endTime:string; 
};

export type IFilters = {
  searchTerm?: string;
  minPrice?: Number;
  maxPrice?: Number;
  location?: String;
};
