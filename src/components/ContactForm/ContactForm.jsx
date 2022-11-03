import { Button } from 'components/MainButton/MainButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(addContacts({ id: nanoid(), name, number }));

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.conactForm}>
      <label htmlFor="name" className={s.labelForm}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          value={name}
          onChange={handleChange}
          className={s.inputForm}
        />
      </label>
      <label htmlFor="number" className={s.labelForm}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          value={number}
          onChange={handleChange}
          className={s.inputForm}
        />
      </label>
      <Button type="submit" className={s.contactsButton}>
        Add contact
      </Button>
    </form>
  );
};
