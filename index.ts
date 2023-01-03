import { config } from "dotenv";
import express from "express";
import path from "path";
import { connectDB } from "./configs/database";
import { authRouter } from "./routes/authRouter";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

config();
connectDB();

const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONT_END_URL }));
app.use(cookieParser());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../..", "public")));

app.use("/auth", authRouter);
app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../public", "index.html"));
});

app.listen(3000, () => {
    console.log("server started");
});