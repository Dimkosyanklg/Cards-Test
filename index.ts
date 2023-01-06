import { config } from "dotenv";
import express from "express";
import path from "path";
import { connectDB } from "./configs/database";
import bodyParser from "body-parser";
import { authRouter } from "./routes/authRouter";
import cookieParser from "cookie-parser";
import { cardsRouter } from "./routes/cardsRouter";

config();
connectDB();

const app = express();

// app.use(cors({ credentials: true, origin: process.env.FRONT_END_URL }));
app.use(cookieParser());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client", "public")));

app.use("/auth", authRouter);
app.use("/cards", cardsRouter);
app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/public", "index.html"));
});

app.listen(3000, () => {
    console.log("server started");
});
