export type Card = {
    header: string;
    word: string;
    part: string;
    example: string;
    translation: string;
    _id: string;
};

export type PaginationCards = {
    cards: Card[];
    count: number;
};
