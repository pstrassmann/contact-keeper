import React, { useContext } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContacts } = contactContext;
  const contactsToRender = filteredContacts || contacts;
  return (
    <>
      <TransitionGroup>
        {contactsToRender.map((contact) => (
          <CSSTransition
            key={contact.id}
            appear={true}
            in={true}
            timeout={{ appear: 500, enter: 500, exit: 300 }}
            classNames="item"
          >
            <ContactItem contact={contact}></ContactItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default Contacts;
