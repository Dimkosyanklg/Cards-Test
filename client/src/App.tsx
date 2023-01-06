import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Cards } from "./features/cards";
import { Header } from "./features/header";
import { Login } from "./features/login";
import { Register } from "./features/register";

type Props = {};

export const App: React.FC<Props> = ({}) => {
    return (
        <>
            <Layout header={<Header />}>
                <Routes>
                    <Route path="/" element={<Cards />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Layout>
        </>
    );
};
