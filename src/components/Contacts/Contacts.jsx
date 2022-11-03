import { Button } from 'components/MainButton/MainButton';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import s from './Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <p className={s.listName}>{contact.name}:</p>
      <p className={s.listPhone}>{contact.number}</p>
      <Button onClick={handleDelete} className={s.listButton}>
        Remove contact
      </Button>
    </>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
