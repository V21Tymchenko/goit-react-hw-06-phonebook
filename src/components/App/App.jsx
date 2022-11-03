import { Title } from 'components/Title/Title';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContacts } from '../FilterContact/FilterContact';
import s from './App.module.css';

export const App = () => {
  return (
    <section className={s.section}>
      <div className={s.containerPhonebook}>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <div className={s.contactsCentered}>
          <FilterContacts />
        </div>
      </div>
    </section>
  );
};
