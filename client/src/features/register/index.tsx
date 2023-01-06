import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Input, InputContainer, InputTitle, RoundBlock } from "../../components/core";
import { InputError } from "../../components/core/Input.styled";
import { registerApi } from "./api/register";
import * as s from "./Register.styled";

type Props = {};

type Fields = {
    login: string;
    password: string;
};

export const Register: React.FC<Props> = ({}) => {
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
                    registerApi(model)
                        .then(() => {
                            navigate("/");
                        })
                        .catch((error) => {
                            if (error.response.status === 409) {
                                setApiError("Пользователь уже существует");
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
                <button type="submit">Зарегистрироваться</button>
                {!!apiError && <InputError>{apiError}</InputError>}
            </s.Form>
        </RoundBlock>
    );
};
