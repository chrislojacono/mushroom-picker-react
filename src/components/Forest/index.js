import React, { Component } from 'react';
import mushroomData from '../../helpers/data/mushroomData';
import Mushroom from '../Mushroom';

export default class Forest extends Component {
  state = {
    mushrooms: mushroomData.mushrooms,
    basket: mushroomData.basket,
  };

  render() {
    return (
      <div className='mushroomWrap'>
        {this.state.mushrooms.map((mushroom) => (
          <Mushroom key={mushroom.id} mushrooms={mushroom} />
        ))}
      </div>
    );
  }
}
