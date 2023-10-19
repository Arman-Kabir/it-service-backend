import express from 'express';
import { ServicesRoutes } from '../modules/services/services.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { SlotsRoutes } from '../modules/slots/slots.route';
import { BlogsRoutes } from '../modules/blogs/blogs.route';
import { BookingRoutes } from '../modules/booking/booking.route';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/services",
    route: ServicesRoutes,
  },
  {
    path: "/blogs",
    route: BlogsRoutes,
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
  },
  {
    path: "/booking",
    route: BookingRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
