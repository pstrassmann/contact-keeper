import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, [isAuthenticated]);

  const onLogout = () => {
    logoutUser();
  };

  const authLinks = (
    <>
      {/*<li>Hello, {user && user.name}</li>*/}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="#" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
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
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} style={{ marginRight: '0.5rem' }} />
        {title}
      </h1>
      <ul>
        {renderedNavLinks}
      </ul>
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
