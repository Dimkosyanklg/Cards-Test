import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { createGlobalStyle } from "styled-components";
import { Header } from "../../features/header";
import * as s from "./Layout.styled";

type Props = {
    children?: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    & #root {
      height: 100%;
    }
  }
  html {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
` as any;

export const Layout: React.FC<Props> = ({ children }) => {
    const { pathname } = useLocation();
    const [showHeader, setShowHeader] = useState(pathname !== "/login" && pathname !== "/register");

    useEffect(() => {
        setShowHeader(pathname !== "/login" && pathname !== "/register");
    }, [pathname]);

    return (
        <s.Wrapper>
            {showHeader && <Header />}
            <s.Content>{children}</s.Content>
            <GlobalStyle />
        </s.Wrapper>
    );
};
