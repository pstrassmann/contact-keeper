import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import ContactContext from "../../context/contact/contactContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const contactContext = useContext(ContactContext);
  const {
    loginUser,
    loadUser,
    isAuthenticated,
    error,
    clearErrors,
    setGuest,
  } = authContext;
  const { setAlert } = alertContext;
  const { clearContacts } = contactContext;
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error) {
      try {
        setAlert(error, 'danger');
      } catch (err) {
        setAlert('Authorization error', 'danger');
      }
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState(initialState);

  const { email, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      loginUser({ email, password });
    }
  };

  const handleGuest = () => {
    setGuest();
    clearContacts();
    props.history.push('/');
  };

  return (
    <>
      <div className="form-container">
        <h1>
          Account <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">
            Email
            <input type="text" name="email" value={email} onChange={onChange} />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </label>
          <input
            type="submit"
            value="Login"
            className="btn btn-block btn-primary"
          />
        </form>
        <p className="text-center">
          Don't have an account?{' '}
          <a href="/register">
            <button className="anim-container btn-link">
            <span className="link-underline-anim">
              Register here!
              <i
                className="fas fa-user-plus"
                style={{ marginLeft: '0.4rem' }}
              />
            </span>
            </button>
          </a>
        </p>
        <p className="text-center">
          Don't WANT an account?{' '}
          <button className="anim-container btn-link" onClick={handleGuest}>
            <span className="link-underline-anim">
              Try as a guest!
              <i
                className="fas fa-user-ninja"
                style={{ marginLeft: '0.4rem' }}
              />
            </span>
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
