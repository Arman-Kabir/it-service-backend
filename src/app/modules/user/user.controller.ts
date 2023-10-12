import { NextFunction, Request, Response } from "express";
import {  deleteUserService, getSingleUserService, getUsersService, myProfileService, updateMyProfileService, updateUserService } from "./user.service";



export const getUsers =async(req:Request,res:Response,next:NextFunction)=>{
    try {    
        console.log(req.headers.authorization);  
        console.log(req.user);  
        const result = await getUsersService();
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"Users retrieved successfully",
            data:result 
        })
    } catch (err) {      
        next(err);
    } 
}

export const myProfile =async(req:Request,res:Response,next:NextFunction)=>{
    try {    
        // console.log(req.headers.authorization);  
        // console.log(req.user);  
        const result = await myProfileService(req.user);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"Users information retrieved successfully",
            data:result 
        })
    } catch (err) {      
        next(err);
    } 
}

export const updateMyProfile =async(req:Request,res:Response,next:NextFunction)=>{
    try {    
        // console.log(req.headers.authorization);  
        console.log(req.user,req.body);  
        const result = await updateMyProfileService(req.user,req.body);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"Users information updated successfully",
            data:result 
        })
    } catch (err) {      
        next(err);
    } 
}

export const getSingleUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        const result = await getSingleUserService(id);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"User retrieved successfully",
            data:result 
        })
    } catch (err) {   
        next(err);
    } 
}

export const updateUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        console.log(id,updatedData);
        const result = await updateUserService(id,updatedData);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"User updated successfully",
            data:result 
        })
    } catch (err) {   
        next(err);
    } 
}
export const deleteUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        
        const result = await deleteUserService(id);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"User deleted successfully",
            data:result 
        })
    } catch (err) {   
        next(err);
    } 
}