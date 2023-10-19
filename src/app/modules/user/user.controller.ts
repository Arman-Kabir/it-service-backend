import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";


const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.headers.authorization);
        console.log(req.user);
        const result = await UserService.getUsers();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Users retrieved successfully",
            data: result
        })
    } catch (err) {
        next(err);
    }
}

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // console.log(req.headers.authorization);  
        // console.log(req.user);  
        const result = await UserService.myProfile(req.user);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Users information retrieved successfully",
            data: result
        })
    } catch (err) {
        next(err);
    }
}

const updateMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // console.log(req.headers.authorization);  
        console.log(req.user, req.body);
        const result = await UserService.updateMyProfile(req.user, req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Users information updated successfully",
            data: result
        })
    } catch (err) {
        next(err);
    }
}

const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await UserService.getSingleUser(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User retrieved successfully",
            data: result
        })
    } catch (err) {
        next(err);
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        console.log(id, updatedData);
        const result = await UserService.updateUser(id, updatedData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User updated successfully",
            data: result
        })
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        // console.log(id);

        const result = await UserService.deleteUser(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User deleted successfully",
            data: result
        })
    } catch (err) {
        next(err);
    }
};

export const UserController = {
    getUsers,
    myProfile,
    updateMyProfile,
    getSingleUser,
    updateUser,
    deleteUser
}