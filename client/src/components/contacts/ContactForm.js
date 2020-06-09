import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, currentContact, clearCurrent } = contactContext;

  const initialState = {
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  };

  const [contact, setContact] = useState(initialState);

  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact(initialState);
    }
  }, [contactContext, currentContact]);

  const { name, email, phone, type } = contact;

  const onChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // If updating existing contact
    if (currentContact) {
      updateContact(contact);
      clearCurrent();
    } else {
      addContact(contact);
      setContact(initialState);
    }
  };

  const onClear = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-primary">
        {currentContact ? 'Edit Contact' : 'Add Contact'}
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h4>Contact Type</h4>
      <div className="radio-type-container">
        <label className="label-type-radio" htmlFor="personal">
          <input
            type="radio"
            name="type"
            value="personal"
            id="personal"
            checked={type === 'personal'}
            onChange={onChange}
          />
          Personal
        </label>
        <label className="label-type-radio" htmlFor="professional">
          <input
            type="radio"
            name="type"
            value="professional"
            id="professional"
            checked={type === 'professional'}
            onChange={onChange}
          />
          Professional
        </label>
      </div>
      <div>
        <input
          type="submit"
          value={currentContact ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {currentContact && <button type="text" className="btn btn-light btn-block" onClick={onClear}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
