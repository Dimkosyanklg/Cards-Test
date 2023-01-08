import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
    color: #fff;
    text-transform: uppercase;
    padding: 6px;
    border-radius: 6px;
    border: 2px solid ${({ disabled }) => (disabled ? "#b9b9b9" : "#629dfc")};
    cursor: pointer;
    background-color: ${({ disabled }) => (disabled ? "#ededed" : "#629dfc")};
    color: ${({ disabled }) => (disabled ? "#b9b9b9" : "#fff")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
