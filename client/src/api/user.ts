import { client } from "./clients";
import { UserModel } from "./types";

export const getUser = async () => {
    const { data } = await client.get<UserModel>(`/user/get`);

    return data ?? {};
};
