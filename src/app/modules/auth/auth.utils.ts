// import { User } from "../user/user.model";

// // Admin Id
// export const findLastUserId = async (): Promise<string | undefined> => {
//     const lastUser = await User.find({  }, { id: 1, _id: 0 })
//         .sort({
//             createdAt: -1,
//         })
//         .lean();

//     // console.log(lastAdmin);
//     return lastUser?.id ? lastUser.id.substring(2) : undefined;
// };

// export const generateUserId = async (): Promise<string> => {
//     const currentId =
//         (await findLastUserId()) || (0).toString().padStart(5, '0');
//     let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
//     incrementedId = `U-${incrementedId}`;

//     return incrementedId;
// };