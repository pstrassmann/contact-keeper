import React, { useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const {
    registerUser, error, clearErrors, isAuthenticated, loadUser,
  } = authContext;

  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  },[error, isAuthenticated, props.history]);

  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const [user, setUser] = useState(initialState);

  const {
    name, email, password, password2,
  } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      registerUser({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account
        {' '}
        <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" value={name} onChange={onChange} />
        </label>
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
            minLength="6"
          />
        </label>
        <label htmlFor="password2">
          Confirm Password
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </label>
        <input
          type="submit"
          value="Register"
          className="btn btn-block btn-primary"
        />
      </form>
      <p className="text-center">
        Already have an account?{' '}
        <a href="/login" className="anim-container">
            <span className="link-underline-anim">
              Login here
              <i
                className="fas fa-sign-in-alt"
                style={{ marginLeft: '0.4rem' }}
              />
            </span>
        </a>
      </p>
    </div>
  );
};

export default Register;
