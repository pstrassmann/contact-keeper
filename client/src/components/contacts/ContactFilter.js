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
    // eslint-disable-next-line
  }, [filterText]);

  return (
    <>
      <input
        type="text"
        name="filter"
        value={filterText}
        placeholder="Search contacts..."
        className="contact-search-input"
        onChange={onChange}
      />
    </>
  );
};

export default ContactFilter;
