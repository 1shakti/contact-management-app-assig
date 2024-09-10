import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { ContactInte } from "../../types";

interface ContactState {
  contacts: ContactInte[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactInte>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<ContactInte>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
