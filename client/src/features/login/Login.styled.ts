import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        margin-top: 12px;
    }

    & > *:last-child {
        margin-bottom: 12px;
    }
`;
