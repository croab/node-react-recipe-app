import React, { Component } from 'react';
import WholeStar from './wholeStar';
import HalfStar from './halfStar';
import starsStyle from './starsList.module.css';

class StarList extends Component {
  render() {
    const numStarsToHalf = (Math.round((this.props.ratingsAverage)*2)/2);
    const numWholeStars =Math.floor(numStarsToHalf);
    const numHalfStars = (numStarsToHalf - numWholeStars) * 2;
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

    return (
      // {!numHalfStars ? "Loading..." : numStarsToHalf.map((num) => <RecipeCardComplex id={ data._id } key={ data._id } cardData={data} />)}
      <div className={starsStyle.stars}>{stars}</div>
    )
  }
}

export default StarList;