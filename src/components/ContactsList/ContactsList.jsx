import PropTypes from 'prop-types';
import { Contacts } from 'components/Contacts/Contacts';
import s from './ContactsList.module.css';
export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={s.cotactsList}>
          <Contacts contact={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
