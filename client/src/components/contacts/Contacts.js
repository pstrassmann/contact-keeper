import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, loadContacts, filteredContacts, loading } = contactContext;
  const contactsToRender = filteredContacts || contacts;

  useEffect(() => {
    loadContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts && contacts.length === 0) {
    return (
      <h3 className="text-primary">Add your first contact!</h3>
    )
  } else {

    return (
      <>
        { contacts !== null && !loading ? (
          <TransitionGroup>
            { contactsToRender.map((contact) => (
              <CSSTransition
                key={ contact._id }
                appear={ true }
                in={ true }
                timeout={ { appear: 500, enter: 500, exit: 300 } }
                classNames="item"
              >
                <ContactItem contact={ contact }></ContactItem>
              </CSSTransition>
            )) }
          </TransitionGroup>
        ) : (
          <Spinner/>
        ) }
      </>
    );
  }
  ;
}

export default Contacts;
