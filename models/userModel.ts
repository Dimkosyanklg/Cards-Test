import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export interface IUser {
    login: string;
    password: string;
    generateAuthToken: () => string;
}

const userScheme = new mongoose.Schema<IUser>({
    login: { type: String, default: null },
    password: { type: String },
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
