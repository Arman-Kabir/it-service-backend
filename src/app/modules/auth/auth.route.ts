import express from 'express';
import {  createUser, getRefreshToken, loginUser} from './auth.controller';

const router = express.Router();

router.post('/signup',createUser)
router.post('/login',loginUser)
router.post('/refresh-token',getRefreshToken)


export default router;



