import { client } from "../../../api/clients";
import { LoginModel } from "./types";

export const loginApi = async (request: LoginModel) => {
    await client.post("/auth/login", request);
};
