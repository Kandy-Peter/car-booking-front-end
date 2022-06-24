import React, { useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../logics/localStore';

const Homepage = () => {
  useEffect(() => {
    if (getLocalStorage() === null || getLocalStorage() === undefined) {
      setLocalStorage({ LoggedIn: false, user_id: '' });
    }
    console.log(getLocalStorage());
  }, []);

  return (
    <section>
      <h1>Homepage</h1>
    </section>
  );
};

export default Homepage;
