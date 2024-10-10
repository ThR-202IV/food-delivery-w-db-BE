import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMW from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMW, addToCart);
cartRouter.post("/remove", authMW, removeFromCart);
cartRouter.post("/get", authMW, getCart);

export default cartRouter;
