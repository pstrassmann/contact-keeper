import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const {
    _id: id, name, email, phone, type,
  } = contact;

  const [selected, setSelected] = useState('');

  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent, currentContact } = contactContext;

  useEffect(() => {
    if (currentContact && (contact._id === currentContact._id)) {
      setSelected('selected-shadow');
    } else {
      setSelected('');
    }
  }, [contactContext, currentContact]);

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(contact);
  };

  return (
    <div className={`card bg-light ${selected}`}>
      <h3 className="text-primary text-left">
        {name}
        <span
          className={`badge ${
            type === 'professional' ? 'badge-success' : 'badge-primary'
          }`}
          style={{ textTransform: 'capitalize', float: 'right' }}
        >
          {type}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open mr" />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone mr" />
            {phone}
          </li>
        )}
      </ul>
      <button type="button" className="btn btn-dark btn-xsm round-corners" onClick={onEdit}>Edit</button>
      <button type="button" className="btn btn-danger btn-xsm round-corners" onClick={onDelete}>Delete</button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
