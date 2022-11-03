import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContact, changeFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
