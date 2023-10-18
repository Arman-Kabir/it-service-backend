import { NextFunction, Request, Response } from 'express';
import { AuthService } from './auth.service';
import config from '../../../config';



const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await AuthService.createUser(userData);
    // console.log(req.cookies, 'cookie');
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

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await AuthService.loginUser(userData);

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
const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const id = req.params.id;
    const result = await AuthService.changePassword(id,userData);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Password Changed successfully",
      // data: result
      data: result
    })
  } catch (err) {
    next(err);
  }
};

const getRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.cookies;
    const result = await AuthService.getRefreshToken(refreshToken);

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

export const AuthController = {
  createUser,
  changePassword,
  loginUser,
  getRefreshToken
}







