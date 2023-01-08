import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { getUser } from "./api/user";
import { Layout } from "./components/layout";
import { Cards } from "./features/cards";
import { Login } from "./features/login";
import { Profile } from "./features/profile";
import { Register } from "./features/register";
import { setUser } from "./store/user";

type Props = {};

export const App: React.FC<Props> = ({}) => {
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname !== "/login" && pathname !== "/register") {
            const fetchUser = async () => {
                const user = await getUser();

                dispatch(setUser(user));
            };
            fetchUser();
        }
    }, [pathname]);

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Cards />} />
                </Routes>
            </Layout>
        </>
    );
};
