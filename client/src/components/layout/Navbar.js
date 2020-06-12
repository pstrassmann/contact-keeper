import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const contactContext = useContext(ContactContext);
  const { clearContacts } = contactContext;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser } = authContext;

  const onLogout = () => {
    logoutUser();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <button
          type="button"
          className="btn-link"
          onClick={onLogout}
          style={{ color: '#fff' }}
        >
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </button>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  // Because isAuthenticated initializes as 'null' and not 'false,'
  // Navlinks are only rendered after loadUser has run and set
  // a true or false boolean for isAuthenticated.
  let renderedNavLinks;
  if (isAuthenticated === true) {
    renderedNavLinks = authLinks;
  } else if (isAuthenticated === false) {
    renderedNavLinks = guestLinks;
  }

  return (
    <div className="navbar navbar-bg">
      <h1>
        <i className={icon} style={{ marginRight: '0.5rem' }} />
        {title}
      </h1>
      <ul>{renderedNavLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
