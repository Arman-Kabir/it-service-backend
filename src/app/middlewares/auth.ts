import { NextFunction, Request, Response } from "express";
import ApiError from "../../errors/ApiError";
import config from "../../config";
import { Secret } from "jsonwebtoken";
import { ENUM_USER_ROLE } from "../../enums/user";
var jwt = require('jsonwebtoken');

// interface MyRequest extends Request {
//     user:{
//         role:ENUM_USER_ROLE;
//         id:string;
//     }
// }

export const auth = (...requiredRoles: string[]) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            //get authorization token
            const token = req.headers.authorization;
            if (!token) {
                throw new ApiError(404, 'u r not authorized');
            }

            let verifiedToken=null;

            //verify token
            verifiedToken = jwt.verify(token, config.jwt.secret as Secret);

            req.user = verifiedToken;
            req.id = verifiedToken;
            // console.log(req.user,req.id);

            //role based guard
            if (requiredRoles.length && !requiredRoles.includes(verifiedToken.role)) {
                throw new ApiError(404, 'Forbidden ');
            }
            next();

        } catch (error) {
            next(error);
        }
    }