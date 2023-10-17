import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.get('/', AdminController.getAdmins);



router.post('/create-admin', AdminController.createAdmin)
router.post('/login', AdminController.loginAdmin)


export const AdminRoutes = router;



