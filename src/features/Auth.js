import { createSlice } from '@reduxjs/toolkit';
import 'firebase/auth';

//εζηΆζ
const initialState = {
  user: null,
  isSignedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isSignedIn = true;
    },
    signOut: (state) => {
      state.user = null;
      state.isSignedIn = false;
    },
  },
});

export const { setUser, signOut } = authSlice.actions;
export default authSlice.reducer;

//test
