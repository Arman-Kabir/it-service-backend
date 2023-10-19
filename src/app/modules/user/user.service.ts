// import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";


const getUsers = () => {
  const data = User.find({});
  return data;
};

const myProfile = (userData: any) => {
  const { id } = userData;
  const data = User.find({ _id: id });
  return data;
};

const updateMyProfile = async (userData: any, updatedData: any) => {
  const { id } = userData;
  const data = await User.findOneAndUpdate({ _id: id }, updatedData, { new: true });
  return data;
};

const getSingleUser = (payload: string) => {
  const data = User.find({ _id: payload });
  //   console.log(data);
  return data;
};
const updateUser = async (id: string, payload: any) => {
  const data = await User.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return data;
};

const deleteUser = async (id: string) => {
  // console.log(id);
  const data = await User.findOneAndDelete({ _id: id }, {
    new: true,
  });
  return data;
};

export const UserService={
  getUsers,
  myProfile,
  updateMyProfile,
  getSingleUser,
  updateUser,
  deleteUser
}
