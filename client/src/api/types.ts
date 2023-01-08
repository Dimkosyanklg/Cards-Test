export enum Gender {
    Male,
    Female,
    Helicopter,
}

export enum LanguageSkill {
    A,
    B,
    C,
}

export type UserModel = {
    name: string | null;
    surname: string | null;
    patronymic: string | null;
    dateOfBirth: Date | string | null;
    gender: Gender | null;
    someNumber: number | null;
    languageSkill: LanguageSkill | null;
    someCheckbox: number[] | null;
};
