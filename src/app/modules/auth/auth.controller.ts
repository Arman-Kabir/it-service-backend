import { NextFunction, Request, Response } from 'express';
import { createUserService, getRefreshTokenService, loginUserService } from './auth.service';
import config from '../../../config';



export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await createUserService(userData);
    console.log(req.cookies, 'cookie');
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User Created successfully",
      data: result
    })
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await loginUserService(userData);

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

export const getRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {refreshToken}= req.cookies;
    const result = await getRefreshTokenService(refreshToken);

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);
    
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User lohgged in successfully",
      data: result
    })
  } catch (err) {
    next(err);
  }
};







