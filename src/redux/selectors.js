export const getFilterContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase()?.includes(state?.contacts.filter)
  );
};
