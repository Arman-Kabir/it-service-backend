import express from 'express';
import { createAdmin, loginAdmin } from './admin.controller';

const router = express.Router();

router.post('/create-admin',createAdmin)
router.post('/login',loginAdmin)


export default router;



