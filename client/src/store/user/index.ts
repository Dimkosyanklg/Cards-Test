import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialUserState } from "./initialState";
import { UserState } from "./types";

const slice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        setUser(_, { payload: user }: PayloadAction<UserState>) {
            return user;
        },
    },
});

const { setUser } = slice.actions;

export { setUser };
export default slice.reducer;
