import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const About = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="center-flex">
      <div className="card card-about">
        <h1 className="text-center">About Contact Keeper</h1>
        <p className="my-1">
          <a href="/" className="anim-container">
            <span className="link-underline-anim">
              Contact Keeper</span></a>{' '}
          is a full stack web application for organizing and updating your
          contacts. The frontend was built with React, and the backend was built
          with Node/Express and MongoDB Atlas.
        </p>
      </div>
    </div>
  );
};

export default About;
