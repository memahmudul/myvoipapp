import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import balanceRoute from "./routes/balanceRoute.js";
import orderRoute from "./routes/orderRoute.js";
import offerRoute from "./routes/offerRoute.js";
import commissionRoute from "./routes/commissionRoute.js";
import sliderRoute from "./routes/sliderRoute.js";
import paymentRoute from "./routes/paymentRoutes.js";
import adminRoute from "./routes/adminRoute.js";
import settingsRoute from "./routes/settingsRoute.js";
import fcmRoute from "./routes/fcmRoute.js";

import cors from "cors";

//configure env
dotenv.config();

//database config
connectDB();

//rest objet
const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/auth", authRoute);
app.use("/balance", balanceRoute);
app.use("/order", orderRoute);
app.use("/offer", offerRoute);
app.use("/commission", commissionRoute);
app.use("/slider", sliderRoute);
app.use("/payment", paymentRoute);
app.use("/admin", adminRoute);
app.use("/settings", settingsRoute);
app.use("/fcm", fcmRoute);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to our app",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, "0.0.0.0");

//192.168.0.129 command prompt e ipconfig likhe ipv4 address eta

//0.0.0.0 when upload to hosting site
