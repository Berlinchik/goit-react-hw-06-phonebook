import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initState = {
  contacts: [
    { id: 0, userName: 'Learn HTML and CSS', number: 112233 },
    { id: 1, userName: 'Get good at JavaScript', number: 112233 },
    { id: 2, userName: 'Master React', number: 112233 },
    { id: 3, userName: 'Discover Redux', number: 112233 },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: initState,
  reducers: {
    addContacts: {
      reducer(state, { payload }) {
        return {
          ...state,
          contacts: [...state.contacts, payload],
        };
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
    changeFilter(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { addContacts, deleteContacts, changeFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
