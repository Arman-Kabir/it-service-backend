// import ApiError from "../../../errors/ApiError";
import { SortOrder } from "mongoose";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IFilters, IServices } from "./blogs.interface";

import ApiError from "../../../errors/ApiError";
import { Services } from "./blogs.model";

const getBlogs = async (
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

  const data = await Services.find(
    andConditions.length > 0 ? { $and: andConditions } : {}
  )
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  // return data;

  const count = await Services.countDocuments();
  return {
    meta: {
      page,
      limit,
      count,
    },
    data: data,
  };
};

const createBlog = (payload: any): Promise<IServices> => {
  const results = Services.create(payload);
  // console.log(results);

  if (!results) {
    throw new ApiError(400, 'Failed to create Service');
  }
  return results;
};

const getSingleBlog = (payload: string) => {
  const data = Services.find({ _id: payload });
  //   console.log(data);
  return data;
};
const updateBlog = async (id: string, payload: any) => {
  const data = await Services.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return data;
};

const deleteBlog = async (id: string) => {
  const data = await Services.findOneAndDelete({ _id: id }, { new: true, });
  return data;
};

export const BlogsService = {
  getBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog
}