import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Header } from "./features/header";

type Props = {};

export const App: React.FC<Props> = ({}) => {
    return (
        <>
            <Layout header={<Header />}>
                <Routes>
                    <Route path="/" element={<div>123</div>} />
                </Routes>
            </Layout>
        </>
    );
};
