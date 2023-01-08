import { UserModel } from "../../../api/types";

export const formMapper = (user: UserModel) => {
    return {
        ...user,
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split("T")[0] : null,
        someCheckbox: user.someCheckbox?.map((value) => value.toString()),
        gender: user.gender?.toString(),
        languageSkill: user.languageSkill?.toString(),
    };
};
