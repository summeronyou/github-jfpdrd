import React from 'react';
import './Toggle.css';

function Toggle({ name }) {
  return (
    <div className="Toggle">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <span>{name}</span>
    </div>
  );
}

export default Toggle;
