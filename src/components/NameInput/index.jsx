import React from 'react';
import './style.scss';

function NameInput({ value, handleName, handleSubmit }) {
  return (
    <div id="user-name-input">
      <form onSubmit={handleSubmit} className="user-name-form">
        <label htmlFor="nameInput" className="user-name-label">
          Your Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={value}
          className="input"
          onChange={(e) => handleName(e.target.value)}
        />
        <div className="button-wrapper">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default NameInput;
