import express, { Application, NextFunction, Request, Response} from "express";
import cors from "cors";
// import ApiError from "./errors/ApiError";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import ApiError from "./errors/ApiError";
import router from "./app/routes";
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
app.use('/api/v1',router);

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
