import React from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from './../../assets/styles/button.module.css';

function Button(props) {
  return (
    <Link to={props.path}>
      <button class={buttonStyles.createButton}>
        <span>Create</span>
      </button>
    </Link>
  )
}

export default Button;
