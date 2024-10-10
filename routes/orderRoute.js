import express from "express";
import authMW from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  usersOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMW, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMW, usersOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
