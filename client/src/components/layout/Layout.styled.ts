import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #ededed;
    height: 100%;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 2fr 1fr;
    grid-template-areas: "leftMenu content rightMenu";
    column-gap: 16px;
    width: 1000px;
    margin: 0 auto;
`;

export const LayoutGridAreas = { leftMenu: "leftMenu", content: "content", rightMenu: "rightMenu" };
