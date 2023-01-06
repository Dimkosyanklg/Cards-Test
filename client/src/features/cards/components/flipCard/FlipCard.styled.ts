import styled from "styled-components";

export const FlipCardOuter = styled.div`
    width: 190px;
    height: 250px;
    margin: 25px 25px;
`;

export const FlipCardInner = styled.div<{ showBack: boolean }>`
    transform-style: preserve-3d;
    transition: 0.5s linear 0.1s;
    position: relative;
    width: inherit;
    height: inherit;

    transform: ${({ showBack }) => (showBack ? "rotateY(180deg)" : "none")};
`;

const Card = styled.div`
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    padding: 10px 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardFront = styled(Card)`
    transform: rotateY(0);
`;

export const CardBack = styled(Card)`
    transform: rotateY(180deg) translateX(34px);

    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

export const CardHeader = styled.span`
    height: 20px;
    background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: color-change 2s infinite ease-out;

    @keyframes color-change {
        0% {
            background-position: -30px;
        }
        60% {
            background-position: 100px;
        }
        100% {
            background-position: 150px;
        }
    }
`;

export const CardWord = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

export const CardPart = styled.i``;

export const CardExample = styled.span``;

export const CardAction = styled.span`
    color: #629dfc;
    cursor: pointer;
    text-transform: uppercase;
`;

export const CardTranslation = styled.span`
    padding: 5px;
    cursor: default;

    background: linear-gradient(90deg, #000 50%, transparent 0) repeat-x, linear-gradient(90deg, #000 50%, transparent 0) repeat-x,
        linear-gradient(0deg, #000 50%, transparent 0) repeat-y, linear-gradient(0deg, #000 50%, transparent 0) repeat-y;
    background-size: 8px 1px, 8px 1px, 1px 8px, 1px 8px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;

    animation: border-move 0.3s infinite linear;

    @keyframes border-move {
        100% {
            background-position: 8px 0, -8px 100%, 0 -8px, 100% 8px;
        }
    }
`;
