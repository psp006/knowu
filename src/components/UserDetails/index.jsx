import React, { useState, useEffect } from 'react';
import NameInput from '../NameInput';
import './style.scss';

function UserDetails() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isNoUser, setIsNoUser] = useState(false);
  const [country, setCountry] = useState('');
  const handleNameInput = (value) => {
    age ? setAge('') : null;
    gender ? setGender('') : null;
    country ? setCountry('') : null;
    isNoUser ? setIsNoUser(false) : null;
    setName(value);
  };
  const knowYourAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io?name=${name}`);
      const data = await response.json();
      setIsNoUser(!Boolean(data.age));
      setAge(data.age);
    } catch (error) {
      console.log(error);
    }
  };
  const knowYourGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
    } catch (error) {
      console.log(error);
    }
  };
  const knowYourCountry = async () => {
    try {
      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const { country } = await response.json();
      const sortedCountriesArray = country.sort(
        (a, b) => b.probability - a.probability
      );
      setCountry(sortedCountriesArray[0].country_id);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(country, age, gender, 'fdkdkj');
  const handleSubmit = (e) => {
    e.preventDefault();
    knowYourAge();
    knowYourGender();
    knowYourCountry();
  };
  return (
    <div id="user-details-wrapper">
      <NameInput
        value={name}
        handleName={handleNameInput}
        handleSubmit={handleSubmit}
      />
      {!name ? (
        <p className="helper-text">
          Enter name in the input field and click "Submit" to get your details.
        </p>
      ) : isNoUser ? (
        <div className="helper-text">{`There is no detail for ${name}`}</div>
      ) : name && age && gender && country ? (
        <div className="user-details">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Country: {country}</p>
        </div>
      ) : null}
    </div>
  );
}

export default UserDetails;
