import { client } from "./clients";

export const logout = async () => {
    await client.post(`/auth/logout`);
};
