import { client } from "../../../api/clients";
import { RegisterModel } from "./types";

export const registerApi = async (request: RegisterModel) => {
    await client.post("/auth/register", request);
};
