import express from 'express';
import { ServicesRoutes } from '../modules/services/services.route';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/services",
    route: ServicesRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
