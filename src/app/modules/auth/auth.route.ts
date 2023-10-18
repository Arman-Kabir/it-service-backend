import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();



router.post('/signup', AuthController.createUser)
router.post('/login', AuthController.loginUser)
router.post('/change_password/:id', AuthController.changePassword)
router.post('/refresh-token', AuthController.getRefreshToken)


export const AuthRoutes = router;



