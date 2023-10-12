import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import { role } from "./user.constant";
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<IUser>(
  {   
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: role,
      required:true
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      unique:true,
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  // obj.hello=5;
  return obj;
}

userSchema.pre('save', async function (next) {
  //hashing password
  // console.log(this);
  // this.id=56
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds))
  next();
});

// 3. Create a Model.
export const User = model<IUser>("User", userSchema);
