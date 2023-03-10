import styled from "styled-components";

export const Input = styled.input<{ disabled?: boolean }>`
    outline: none;
    border-radius: 5px;
    border: 2px solid #d6d6d6;
    padding: 3px;
    width: 300px;
    background-color: ${({ disabled }) => (disabled ? "#ededed" : "#fff")};
`;

export const InputTitle = styled.span``;

export const InputError = styled.span`
    color: red;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;
