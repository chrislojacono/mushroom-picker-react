import React, { Component } from 'react';
import Mushroom from '../Mushroom';

export default class Basket extends Component {
  render() {
    const randomNum = () => Math.floor(Math.random() * 10000);
    const generateKey = (taco) => `${taco}_${Date.now()}`;

    const { basket } = this.props;
    return (
      <React.Fragment>
        {/* <h2 className='basketTitle'>Your Basket!</h2> */}
        <div className='mushroomWrap'>
          {basket.map((mushroom) => (
            <Mushroom key={generateKey(randomNum())} mushrooms={mushroom} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
