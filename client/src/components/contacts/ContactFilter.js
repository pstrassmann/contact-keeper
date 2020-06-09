import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter } = contactContext;

  const [filterText, setFilterText] = useState('');

  const onChange = (event) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    if (filterText) {
      filterContacts(filterText.trim());
    } else {
      clearFilter();
    }
  }, [filterText]);

  return (
    <>
      <label htmlFor="filter">
        Filter Contacts:
        <input
          type="text"
          name="filter"
          value={filterText}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default ContactFilter;
