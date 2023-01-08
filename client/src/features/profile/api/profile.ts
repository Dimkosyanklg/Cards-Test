import { client } from "../../../api/clients";
import { UserModel } from "../../../api/types";

export const updateProfile = async (request: UserModel) => {
    await client.post("/user/update", request);
};
