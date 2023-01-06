import { client } from "../../../api/clients";
import { Card, PaginationCards } from "./types";

export const getCards = async (limit = 0, skip = 0) => {
    const { data } = await client.get<PaginationCards>(`/cards/get?limit=${limit}&skip=${skip}`);

    return data ?? [];
};
