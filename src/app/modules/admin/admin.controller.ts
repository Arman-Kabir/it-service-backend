import { NextFunction, Request, Response } from 'express';
import { createAdminService, loginAdminService } from './admin.service';
import config from '../../../config';



export const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await createAdminService(userData);
    console.log(req.cookies, 'cookie');
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Admin Created successfully",
      data: result
    })
  } catch (err) {
    next(err);
  }
};

export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminData = req.body;
    const result = await loginAdminService(adminData);

    const { refreshToken, ...others } = result;

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result.refreshToken, cookieOptions);

    //delete refresh token
    // delete result.refreshToken 
    if ('refreshToken' in result) {
      delete result.refreshToken
    }

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      // data: result
      data: others
    })
  } catch (err) {
    next(err);
  }
};







