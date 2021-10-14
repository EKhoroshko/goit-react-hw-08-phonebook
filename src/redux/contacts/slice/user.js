import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: true,
    data: {},
    isLogin: false,
    error: null,
  },
  reducers: {
    userRegister: state => ({
      ...state,
      isLoading: true,
    }),
    userRegisterResolve: (state, actions) => ({
      ...state,
      isLoading: false,
      data: actions.payload,
    }),
    userRegisterReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),

    userLogin: state => ({
      ...state,
      isLoading: true,
    }),
    userLoginResolve: (state, actions) => ({
      ...state,
      isLoading: false,
      data: actions.payload,
      isLogin: true,
    }),
    userLoginReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
    userLogOut: state => ({
      ...state,
      isLoading: true,
    }),
    userLogOutResolve: (state, actions) => ({
      ...state,
      isLoading: false,
      data: actions.payload,
      isLogin: false,
    }),
    userLogOutReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
  },
});

export const {
  userRegister,
  userRegisterResolve,
  userRegisterReject,
  userLogin,
  userLoginResolve,
  userLoginReject,
  userLogOut,
  userLogOutResolve,
  userLogOutReject,
} = userSlice.actions;

export default userSlice.reducer;
