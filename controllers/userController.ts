import { Request, Response } from "express";
import { verifyToken } from "../middleware/authMiddleware";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";

export const getUser = async (req: Request, res: Response) => {
    verifyToken(req, res, async () => {
        try {
            const token = req.cookies.token;
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            // @ts-ignore
            const user = await UserModel.findById(decoded._id);
            const { name, surname, patronymic, dateOfBirth, someCheckbox, someNumber, languageSkill, gender } = user;

            res.status(200).json({ name, surname, patronymic, dateOfBirth, someCheckbox, someNumber, languageSkill, gender });
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    });
};

export const updateProfile = async (req: Request, res: Response) => {
    verifyToken(req, res, async () => {
        try {
            const token = req.cookies.token;
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            const model = req.body;

            // @ts-ignore
            await UserModel.findByIdAndUpdate({ _id: decoded._id }, { ...model });

            res.status(200).json();
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    });
};
