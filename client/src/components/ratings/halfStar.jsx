import React, { Component } from 'react';

function HalfStar(props) {
  const halfStarIcon = <i class="fa-solid fa-star-half-stroke"></i>;

  return (
    <div>
      <p>{halfStarIcon}</p>
    </div>
  )
}

export default HalfStar;