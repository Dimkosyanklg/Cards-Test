import { getCards } from "../controllers/cardsController";
import express from "express";

export const cardsRouter = express.Router();

cardsRouter.get("/get", getCards);
