import React, { useState } from "react";
import { Card } from "../../api/types";
import * as s from "./FlipCard.styled";

type Props = {
    card: Card;
};

export const FlipCard: React.FC<Props> = ({ card }) => {
    const { example, header, part, translation, word } = card;
    const [showBack, setShowBack] = useState(false);

    return (
        <s.FlipCardOuter>
            <s.FlipCardInner showBack={showBack}>
                <s.CardFront>
                    <s.CardHeader>{header}</s.CardHeader>
                    <s.CardWord>{word}</s.CardWord>
                    <s.CardPart>{part}</s.CardPart>
                    <s.CardExample>{example}</s.CardExample>
                    <s.CardAction
                        onClick={() => {
                            setShowBack(true);
                        }}
                    >
                        Learn more
                    </s.CardAction>
                </s.CardFront>
                <s.CardBack
                    onClick={() => {
                        setShowBack(false);
                    }}
                >
                    <s.CardTranslation
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {translation}
                    </s.CardTranslation>
                </s.CardBack>
            </s.FlipCardInner>
        </s.FlipCardOuter>
    );
};
