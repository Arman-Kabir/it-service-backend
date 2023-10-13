import { Types } from "mongoose";

type Location =
  | "Dhaka"
  | "Chattogram"
  | "Barishal"
  | "Rajshahi"
  | "Sylhet"
  | "Comilla"
  | "Rangpur"
  | "Mymensingh";

type Breed =
  | "Brahman"
  | "Nellore"
  | "Sahiwal"
  | "Gir"
  | "Indigenous"
  | "Tharparkar"
  | "Kankrej";

type Label = "for sale" | "sold out";

type Category = "Dairy" | "Beef" | "DualPurpose";

export type ICows = {
  name: string;
  age: number;
  price: number;
  location: Location;
  breed: Breed;
  weight: number;
  label: Label;
  category: Category;
  seller: Types.ObjectId;
};

export type IFilters = {
  searchTerm?: string;
  minPrice?: Number;
  maxPrice?: Number;
  location?:String;
};
