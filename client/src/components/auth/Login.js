import React, { useContext, useState } from 'react';

const Login = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialState);

  const { email, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Login submit');
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
