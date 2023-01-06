import mongoose from "mongoose";

export interface ICard {
    header: string;
    word: string;
    part: string;
    example: string;
    translation: string;
}

const cardSchema = new mongoose.Schema<ICard>({
    header: { type: String },
    word: { type: String },
    part: { type: String },
    example: { type: String },
    translation: { type: String },
});

const cardsArraySchema = new mongoose.Schema({
    cards: [cardSchema],
});

export const CardModel = mongoose.model("Card", cardsArraySchema);
