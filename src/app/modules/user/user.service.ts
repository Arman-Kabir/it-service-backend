// import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";


export const getUsersService = () => {
  const data = User.find({});
  return data;
};

export const myProfileService = (userData: any) => {
  const { id } = userData;
  const data = User.find({ _id: id });
  return data;
};

export const updateMyProfileService = async (userData: any, updatedData: any) => {
  const { id } = userData;
  const data = await User.findOneAndUpdate({ _id: id }, updatedData, { new: true });
  return data;
};

export const getSingleUserService = (payload: string) => {
  const data = User.find({ _id: payload });
  //   console.log(data);
  return data;
};
export const updateUserService = async (id: string, payload: any) => {
  const data = await User.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return data;
};

export const deleteUserService = async (id: string) => {
  const data = await User.findOneAndDelete({ _id: id }, {
    new: true,
  });
  return data;
};
