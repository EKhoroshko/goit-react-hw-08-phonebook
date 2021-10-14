import { configureStore } from '@reduxjs/toolkit';
import { phoneBook } from '../redux/contacts/slice/slice';
import user from '../redux/contacts/slice/user';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBook,
    user: user,
  },
});
