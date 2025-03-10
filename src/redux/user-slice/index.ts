import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "@shared/constants/local-storage-keys";
import { UserState } from "@shared/types/redux";

const initialState: UserState = {
  user:
    JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEYS.nickname) as string
    ) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = { name: action.payload };

      window.localStorage.setItem(
        LOCAL_STORAGE_KEYS.nickname,
        JSON.stringify(user)
      );

      state.user = user;
    },
    logout: (state) => {
      state.user = null;

      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.nickname);
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
