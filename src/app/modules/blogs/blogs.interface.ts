import { Types } from "mongoose";



export type IBlogs = {
  title: string;
  author:string;
  image:string;
  description: string;
  reviews?: string[];
  category: string;
};

export type IFilters = {
  searchTerm?: string;
  minPrice?: Number;
  maxPrice?: Number;
  location?: String;
};
