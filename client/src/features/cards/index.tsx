import React, { useState } from "react";
import { RoundBlock, PaginationContainer, Page } from "../../components/core";
import { usePagination } from "../../hooks/usePagination";
import { getCards } from "./api/cards";
import { Card } from "./api/types";
import * as s from "./Cards.styled";
import { FlipCard } from "./components/flipCard";

type Props = {};

const LIMIT = 5;

export const Cards: React.FC<Props> = ({}) => {
    const [cards, setCards] = useState<Card[]>([]);
    const [count, setCount] = useState(0);

    const fetchCards = async (limit: number, skip: number) => {
        const { cards, count } = await getCards(limit, skip);

        setCards(cards);
        setCount(count);
    };

    const handlePageChange = (page: number, pageSize: number) => {
        const skip = page * pageSize - pageSize;
        fetchCards(LIMIT, skip);
    };

    const { currentPage, handleSetPage, pagesCount } = usePagination({
        itemsCount: count,
        handleChange: handlePageChange,
        defaultPage: 1,
        pageSize: LIMIT,
    });

    const pagesArray = Array.from(Array(pagesCount), (_, p) => p + 1);

    return (
        <RoundBlock>
            {!!cards?.length && (
                <>
                    <s.CardsContainer>
                        {cards.map((card) => (
                            <FlipCard card={card} key={card._id} />
                        ))}
                    </s.CardsContainer>
                    <PaginationContainer>
                        {pagesArray.map((page) => (
                            <Page
                                key={page}
                                active={currentPage === page}
                                onClick={() => {
                                    if (currentPage !== page) {
                                        handleSetPage(page);
                                    }
                                }}
                            >
                                {page}
                            </Page>
                        ))}
                    </PaginationContainer>
                </>
            )}
        </RoundBlock>
    );
};
