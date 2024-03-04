import React from 'react';
import UserDetails from '../UserDetails';
import './style.scss';

function HomePage() {
  return (
    <div id="home-page">
      <h3 className="home-page-heading">Know your Details</h3>
      <UserDetails />
    </div>
  );
}

export default HomePage;
