import React, { Component } from 'react';
import WholeStar from './wholeStar';
import HalfStar from './halfStar';
import EmptyStar from './emptyStar';
import starsStyle from './../../assets/styles/starsList.module.css';

class StarList extends Component {
  render() {
    const numStarsToHalf = (Math.round((this.props.ratingsAverage)*2)/2);
    const numWholeStars =Math.floor(numStarsToHalf);
    const numHalfStars = (numStarsToHalf - numWholeStars) * 2;
    const numEmptyStars = 5 - Math.ceil(numStarsToHalf);
    let stars = [];
    let key = 0;
    for (let i = 0; i < numWholeStars; i++) {
      key = i;
      stars.push(<WholeStar key={key} />);
    }
    for (let i = 0; i < numHalfStars; i++) {
      key = key + 1;
      stars.push(<HalfStar key={key} />);
    }
    for (let i = 0; i < numEmptyStars; i++) {
      key = key + 1;
      stars.push(<EmptyStar key={key} />);
    }

    return (
      <div className={starsStyle.stars}>{stars}</div>
    )
  }
}

export default StarList;