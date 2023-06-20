import React from 'react';
import phonebook from '../img/phonebook.png';

const HomeView = () => {
  return (
    <div>
      <h1>Welcome to your phonebook</h1>
      <img src={phonebook} alt="phonebook" />
    </div>
  );
};

export default HomeView;
