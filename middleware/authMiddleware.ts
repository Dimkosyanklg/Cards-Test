import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json();
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (er) {
        res.clearCookie("token");
        return res.status(401).send(er.message);
    }
};
