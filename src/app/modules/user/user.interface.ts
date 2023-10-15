type Role = "seller" | "buyer";

export type IUser = {
  email: string;
  password: string;
  role?: Role;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  phoneNumber?: string;
};
