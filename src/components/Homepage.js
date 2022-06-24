import React, { useEffect } from 'react';

const Homepage = () => {
  useEffect(() => {
    console.log('working');
  }, []);

  return (
    <section>
      <h1>Homepage</h1>
    </section>
  );
};

export default Homepage;
