import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../shared/types/user';

export interface UserState {
  user: User | null;
  isAnonymus: boolean;
}

const initialState: UserState = {
  user: JSON.parse(window.localStorage.getItem('nickname') as string) || null,
  isAnonymus:
    JSON.parse(window.localStorage.getItem('isAnonymus') as string) || false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = { name: action.payload };
      window.localStorage.setItem('nickname', JSON.stringify(user));
      state.user = { name: action.payload };
      state.isAnonymus = false;
    },
    logout: state => {
      state.user = null;
    },
    setAnonymus: (state, action: PayloadAction<boolean>) => {
      window.localStorage.setItem('isAnonymus', JSON.stringify(action.payload));
      state.isAnonymus = action.payload;
    },
  },
});

export const { setUser, logout, setAnonymus } = userSlice.actions;

export default userSlice.reducer;
