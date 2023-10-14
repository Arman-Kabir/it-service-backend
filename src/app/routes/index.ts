import express from 'express';
import { ServicesRoutes } from '../modules/services/services.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { SlotsRoutes } from '../modules/slots/slots.route';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/services",
    route: ServicesRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },
  {
    path: "/slots",
    route: SlotsRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
