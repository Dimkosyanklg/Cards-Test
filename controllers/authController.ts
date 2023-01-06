import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
    try {
        const { login, password } = req.body;

        if (!(login && password)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await UserModel.findOne({ login });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            login,
            password: encryptedPassword,
        });

        const token = user.generateAuthToken();
        res.cookie("token", token, { httpOnly: true }).json(user);

        res.status(200).json();
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { login, password } = req.body;

        if (!(login && password)) {
            res.status(400).send("All input is required");
        }

        const user = await UserModel.findOne({ login });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = user.generateAuthToken();
            res.cookie("token", token, { httpOnly: true }).json(user);
        }

        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
};

export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token");
    res.json();
};
