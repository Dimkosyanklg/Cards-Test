import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const Page = styled.span<{ active: boolean }>`
    padding: 8px 16px;
    transition: background-color 0.3s;
    color: ${({ active }) => (active ? "#fff" : "#000")};
    background-color: ${({ active }) => (active ? "#629dfc !important" : "none")};
    cursor: pointer;
    border-radius: 15px;

    &:hover {
        background-color: #d9d9d9;
    }
`;
