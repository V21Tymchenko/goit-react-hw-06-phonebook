import { ContactsList } from 'components/ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';

import { getFilterContacts } from 'redux/selectors';
import s from './FilterContacts.module.css';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilterContacts);

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value.trim()));
  };

  return (
    <>
      <label className={s.inputLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={s.inputFiter}
          onChange={e => handleFilter(e)}
        ></input>
      </label>
      <ContactsList contacts={contacts} />
    </>
  );
};
