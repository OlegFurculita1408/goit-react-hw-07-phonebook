import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.users;
export const filterContacts = state => state.filter;
export const selectIsloading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContact = createSelector(
  [selectContacts, filterContacts],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);