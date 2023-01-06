import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button, Input, InputContainer, InputTitle, RoundBlock } from "../../components/core";
import { InputError } from "../../components/core/Input.styled";
import { loginApi } from "./api/login";
import * as s from "./Login.styled";

type Props = {};

type Fields = {
    login: string;
    password: string;
};

export const Login: React.FC<Props> = ({}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Fields>();

    const [apiError, setApiError] = useState("");

    const navigate = useNavigate();

    return (
        <RoundBlock>
            <s.Form
                onSubmit={handleSubmit((model) => {
                    loginApi(model)
                        .then(() => {
                            navigate("/");
                        })
                        .catch((error) => {
                            if (error.response.status === 400) {
                                setApiError("Неверные логин или пароль");
                            }

                            if (error.response.status === 500) {
                                setApiError("Непредвиденная ошибка");
                            }
                        });
                })}
            >
                <InputContainer>
                    <InputTitle>Логин</InputTitle>
                    <Input {...register("login", { required: true })} />
                    {errors.login && <InputError>Введите логин</InputError>}
                </InputContainer>
                <InputContainer>
                    <InputTitle>Пароль</InputTitle>
                    <Input {...register("password", { required: true })} type="password" />
                    {errors.password && <InputError>Введите пароль</InputError>}
                </InputContainer>
                <Button type="submit">Войти</Button>
                <Button
                    onClick={() => {
                        navigate("../register");
                    }}
                >
                    Зарегистрироваться
                </Button>
                {!!apiError && <InputError>{apiError}</InputError>}
            </s.Form>
        </RoundBlock>
    );
};
