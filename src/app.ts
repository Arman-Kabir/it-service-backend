import express, { Application, NextFunction, Request, Response} from "express";
import cors from "cors";
// import ApiError from "./errors/ApiError";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import authRouter from "./app/modules/auth/auth.route";
import userRouter from "./app/modules/user/user.route";
import adminsRouter from "./app/modules/admin/admin.route";
import cowsRouter from "./app/modules/cows/cows.route";
import ordersRouter from "./app/modules/orders/orders.route";
import ApiError from "./errors/ApiError";
var cookieParser = require('cookie-parser')

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(cookieParser())
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async(req: Request, res: Response, next: NextFunction) => {

  res.send("success");
  // throw new Error("ohh   errrorr");
  // throw new ApiError(400,"ohh   errrorr");
  // next("orre error re");
  
});

//routes
// app.use('/api/v1/auth',authRouter);
// app.use('/api/v1/admins',adminsRouter);
// app.use('/api/v1/users',userRouter);
// app.use('/api/v1/cows',cowsRouter);
// app.use('/api/v1/orders',ordersRouter);

app.use('*',(req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});



//global error handler
app.use(globalErrorHandler);

export default app;
