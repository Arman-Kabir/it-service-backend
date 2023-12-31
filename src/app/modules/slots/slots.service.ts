// import ApiError from "../../../errors/ApiError";
import { SortOrder } from "mongoose";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IFilters,  ISlots } from "./slots.interface";

import ApiError from "../../../errors/ApiError";
import {  Slots } from "./slots.model";

const getSlots = async (
  filters: IFilters,
  paginationOptions: IPaginationOptions
) => {
  //filtering starts
  const { searchTerm, ...filtersData } = filters;
  console.log(searchTerm, filtersData);
  const cowsSearchableFields = ["location", "breed", "category"];
  const andConditions = [];
  // console.log(object);

  if (searchTerm) {
    andConditions.push({
      $or: cowsSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  // console.log(andConditions);

  console.log(Object.entries(filtersData));
  // console.log(filtersData.minPrice,filtersData.maxPrice);
  if (Object.keys(filtersData).length) {
    andConditions.push({
      price: {
        $gte: filtersData?.minPrice,
        $lte: filtersData?.maxPrice,
      },
    });
  }
  console.log(andConditions);
  //  andConditions.push({
  //   $and:Object.entries(filtersData).map(([field,value])=>({
  //     [field]:value
  //    }))
  //  })
  // };

  // console.log(andConditions);

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         location: {
  //           $regex: searchTerm,
  //           $options: "i",
  //         },
  //       },
  //       {
  //         breed: {
  //           $regex: searchTerm,
  //           $options: "i",
  //         },
  //       },
  //       {
  //         Category: {
  //           $regex: searchTerm,
  //           $options: "i",
  //         },
  //       },
  //     ],
  //   },
  // ];

  //pagination codes starts
  const { page = 1, limit = 10, sortBy, sortOrder } = paginationOptions;
  const skip = (page - 1) * limit;
  const sortByQuery = paginationOptions?.sortBy || "price";
  const sortOrderQuery = paginationOptions?.sortOrder || "asc";
  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortByQuery && sortOrderQuery) {
    sortConditions[sortByQuery] = sortOrderQuery;
  }
  //pagination codes ends
  // console.log(sortConditions);
  // console.log(andConditions.length);
  // console.log(andConditions.length > 0 ? "HELLO" : "HEY");

  const data = await Slots.find(
    andConditions.length > 0 ? { $and: andConditions } : {}
  )
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  // return data;

  const count = await Slots.countDocuments();
  return {
    meta: {
      page,
      limit,
      count,
    },
    data: data,
  };
};

const createSlot = (payload: any): Promise<ISlots> => {
  const results = Slots.create(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create Cows');
  // }
  return results;
};

const getSingleSlot = (payload: string) => {
  const data = Slots.find({ _id: payload }).populate("seller");
  //   console.log(data);
  return data;
};
const updateSlot = async (id: string, payload: any, userData: any) => {
  // console.log(userData);
  const cowData = await Slots.findOne({ _id: id });
  // const sellerID = cowData?.seller.toHexString();
  // console.log(sellerID);

  // if (userData.id === sellerID) {
  //   // console.log('matched');
  //   const data = await Services.findByIdAndUpdate({ _id: id }, payload, {
  //     new: true,
  //   });
  //   return data;
  // } else {
  //   throw new ApiError(400, 'you are not authorized to update this');
  // }

};

const deleteSlot = async (id: string, userData: any) => {

  const cowData = await Slots.findOne({ _id: id });
  console.log(cowData);
  console.log(userData);
  // const sellerID = cowData?.seller.toHexString();

  // if (userData.id === sellerID) {
  //   const data = await Services.findOneAndDelete(
  //     { _id: id },
  //     {
  //       new: true,
  //     }
  //   );
  //   return data;
  // } else {
  //   throw new ApiError(400, 'you are not authorized to delete this');
  // }

};

export const SlotsService={
  createSlot,
  getSlots,
  getSingleSlot,
  updateSlot,
  deleteSlot
}