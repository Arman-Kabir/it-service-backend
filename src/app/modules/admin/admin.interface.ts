import { Model, Types } from 'mongoose';

type Role='admin';


export type UserName = {
  firstName: string;
  lastName: string; 
};

export type IAdmin = {
  id: string;
  phoneNumber: string;
  password:string;
  role:Role;
  name: UserName;
  address?: string;
};

// export type AdminModel = Model<IAdmin, Record<string, unknown>>;

// export type IAdminFilters = {
//   searchTerm?: string;
//   id?: string;
//   email?: string;
//   contactNo?: string;
//   emergencyContactNo?: string;
//   gender?: 'male' | 'female';
//   bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
//   managementDepartment?: string;
//   designation?: string;
// };
