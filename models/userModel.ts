import mongoose from "mongoose";
import jwt from "jsonwebtoken";

enum Gender {
    Male,
    Female,
    Helicopter,
}

enum LanguageSkill {
    A,
    B,
    C,
}

export interface IUser {
    login: string;
    password: string;
    name: string;
    surname: string;
    patronymic: string;
    dateOfBirth: Date;
    gender: Gender;
    someNumber: number;
    languageSkill: LanguageSkill;
    someCheckbox: number[];
    generateAuthToken: () => string;
}

const userScheme = new mongoose.Schema<IUser>({
    login: { type: String },
    password: { type: String },
    name: { type: String, default: "" },
    surname: { type: String, default: "" },
    patronymic: { type: String, default: "" },
    dateOfBirth: { type: Date, default: null },
    gender: { type: Number, default: null },
    someNumber: { type: Number, default: null },
    languageSkill: { type: Number, default: null },
    someCheckbox: { type: [Number], default: [] },
});
userScheme.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            login: this.login,
        },
        process.env.SECRET_KEY,
        {}
    );
    return token;
};

export const UserModel = mongoose.model("User", userScheme);
