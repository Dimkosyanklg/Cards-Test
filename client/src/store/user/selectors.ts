import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const userSelector = createSelector(
    (state: RootState) => state.user,
    (user) => user
);
