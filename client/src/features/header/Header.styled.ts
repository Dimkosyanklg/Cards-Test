import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    background-color: #fff;
`;

export const Content = styled.div`
    max-width: 800px;
    height: 50px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.2fr 0.2fr;
    grid-template-areas: "logo info profile logout";
    align-items: center;
`;

export const Logo = styled.div`
    grid-area: logo;
`;

export const Info = styled.div`
    grid-area: info;
`;

export const Profile = styled.div`
    grid-area: profile;

    display: flex;
    justify-content: end;
`;

export const Logout = styled.div`
    grid-area: logout;

    display: flex;
    justify-content: end;
`;
