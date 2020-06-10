import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { loginUser, isAuthenticated, error, clearErrors } = authContext;
  const { setAlert } = alertContext;
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  useEffect(() => {
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

  return (
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
    </div>
  );
};

export default Login;
