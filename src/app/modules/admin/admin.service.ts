import config from "../../../config";
import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";
import bcrypt from 'bcrypt';
import { generateAdminId } from "./admin.utils";
import ApiError from "../../../errors/ApiError";
import { Secret } from "jsonwebtoken";
import { User } from "../user/user.model";
var jwt = require('jsonwebtoken');


const getAdmins = () => {
  const data = User.find({ role: "admin" },{ _id: 1, password: 1, role: 1,email:1 });
  console.log(data);
  return data;
};



const createAdmin = async (payload: any): Promise<IAdmin> => {
  // console.log(payload);
  // Hash password
  // payload.password = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))
  payload.id = await generateAdminId();
  // console.log(payload.id);
  const results = await Admin.create(payload);

  return results;
};


const loginAdmin = async (payload: any) => {
  const { phoneNumber, password } = payload;
  // console.log(payload);

  const isAdminExist = await Admin.findOne({ phoneNumber }, { _id: 1, password: 1, role: 1 });
  // console.log(isAdminExist);

  if (!isAdminExist) {
    throw new ApiError(400, 'Admin not exist');
  }

  // Match password
  const isPasswordMatched = await bcrypt.compare(password, isAdminExist?.password);
  // console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    throw new ApiError(500, 'Password not matched');
  }

  // create access token & refresh token
  const accessToken = jwt.sign({
    id: isAdminExist?._id,
    role: isAdminExist?.role
  }, config.jwt.secret as Secret, {
    expiresIn: config.jwt.expires_in
  });

  const refreshToken = jwt.sign({
    id: isAdminExist?._id,
    role: isAdminExist?.role
  }, config.jwt.refresh_secret as Secret, {
    expiresIn: config.jwt.refresh_expires_in
  });

  return {
    accessToken,
    refreshToken
  }

};

export const AdminService = {
  getAdmins,
  createAdmin,
  loginAdmin
}


