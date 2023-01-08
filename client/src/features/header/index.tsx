import React from "react";
import { useNavigate } from "react-router";
import { logout } from "../../api/logout";
import { Button } from "../../components/core";
import * as s from "./Header.styled";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
    const navigate = useNavigate();

    const onLogout = async () => {
        await logout();
        navigate("/login");
    };

    const onProfile = async () => {
        navigate("/profile");
    };

    return (
        <s.Wrapper>
            <s.Content>
                <s.Logo>Лого</s.Logo>
                <s.Info>Информация</s.Info>
                <s.Profile>
                    <Button onClick={onProfile}>Профиль</Button>
                </s.Profile>
                <s.Logout>
                    <Button onClick={onLogout}>Выйти</Button>
                </s.Logout>
            </s.Content>
        </s.Wrapper>
    );
};
