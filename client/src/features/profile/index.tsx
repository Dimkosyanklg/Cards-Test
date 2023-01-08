import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { UserModel } from "../../api/types";
import { Button, Input, InputContainer, InputTitle, RoundBlock } from "../../components/core";
import { userSelector } from "../../store/user/selectors";
import { updateProfile } from "./api/profile";
import * as s from "./Profile.styled";
import { formMapper } from "./utils/formMapper";

type Props = {};

const mochCheckbox = [1, 2, 3];

const mochGenders = { Male: 0, Female: 1, Helicopter: 2 };

const mochSkill = { A: 0, B: 1, C: 2 };

export const Profile: React.FC<Props> = ({}) => {
    const user = useSelector(userSelector);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { isDirty },
    } = useForm<UserModel>({
        // @ts-ignore
        defaultValues: formMapper(user),
    });

    const navigate = useNavigate();

    useEffect(() => {
        setNoPatronymic(!user.patronymic);
        // @ts-ignore
        reset(formMapper(user));
    }, [user]);

    const [noPatronymic, setNoPatronymic] = useState(!user.patronymic);

    useEffect(() => {
        if (noPatronymic) {
            setValue("patronymic", null);
        }
    }, [noPatronymic]);

    return (
        <RoundBlock>
            <s.Form
                onSubmit={handleSubmit((model) => {
                    const request: UserModel = { ...model, dateOfBirth: model.dateOfBirth ? new Date(model.dateOfBirth) : null };

                    updateProfile(request);

                    navigate("/");
                })}
            >
                <InputContainer>
                    <InputTitle>Имя</InputTitle>
                    <Input {...register("name")} />
                </InputContainer>
                <InputContainer>
                    <InputTitle>Фамилия</InputTitle>
                    <Input {...register("surname")} />
                </InputContainer>
                <InputContainer>
                    <InputTitle>Отчество</InputTitle>
                    <Input {...register("patronymic")} disabled={noPatronymic} />
                    <div>
                        <input
                            type="checkbox"
                            checked={noPatronymic}
                            onChange={() => {
                                setNoPatronymic((prevState) => !prevState);
                            }}
                        />{" "}
                        Без отчества
                    </div>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Дата рождения</InputTitle>
                    <Input type="date" {...register("dateOfBirth")} />
                </InputContainer>
                <s.ChoiceContainer>
                    {mochCheckbox.map((value) => (
                        <>
                            <input type="checkbox" key={value} value={value} {...register("someCheckbox")} /> {value}
                        </>
                    ))}
                </s.ChoiceContainer>
                <s.ChoiceContainer>
                    {Object.entries(mochGenders).map(([key, value]) => (
                        <>
                            <input type="radio" key={value} value={value} {...register("gender")} /> {key}
                        </>
                    ))}
                </s.ChoiceContainer>
                <InputContainer>
                    <select {...register("languageSkill")}>
                        {Object.entries(mochSkill).map(([key, value]) => (
                            <option value={value} key={value}>
                                {key}
                            </option>
                        ))}
                    </select>
                </InputContainer>
                <InputContainer>
                    <InputTitle>some number</InputTitle>
                    <Input type="number" {...register("someNumber")} />
                </InputContainer>
                <Button disabled={!isDirty} type="submit">
                    Сохранить
                </Button>
                <Button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    На главную
                </Button>
            </s.Form>
        </RoundBlock>
    );
};
