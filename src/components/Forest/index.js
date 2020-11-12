import React, { Component } from 'react';
import Mushroom from '../Mushroom';

export default class Forest extends Component {
  render() {
    const { mushrooms } = this.props;
    return (
      <div className='mushroomWrap'>
        {mushrooms.map((mushroom) => (
          <Mushroom key={mushroom.id} mushrooms={mushroom} />
        ))}
      </div>
    );
  }
}
