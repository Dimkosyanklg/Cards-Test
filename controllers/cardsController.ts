import { Request, Response } from "express";
import { verifyToken } from "../middleware/authMiddleware";
import { CardModel } from "../models/cardModel";

export const getCards = async (req: Request, res: Response) => {
    verifyToken(req, res, async () => {
        try {
            const limit = parseInt(req.query.limit as string);
            const skip = parseInt(req.query.skip as string);

            const allCards = await CardModel.find({});

            const cards = await CardModel.find({}).skip(skip).limit(limit);

            res.status(200).json({ cards, count: allCards?.length });
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    });
};
