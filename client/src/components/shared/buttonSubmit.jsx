import React from 'react';

import buttonStyles from './../../assets/styles/button.module.css';

function ButtonSubmit() {
  return (
    <button class={buttonStyles.createButton} type="submit">
      <span>Create</span>
    </button>
  )
}

export default ButtonSubmit;