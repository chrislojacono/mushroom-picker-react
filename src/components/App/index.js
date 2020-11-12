import React from 'react';
import Forest from '../Forest';
import Basket from '../Basket';
import mushroomData from '../../helpers/data/mushroomData';

class App extends React.Component {
  state = {
    mushrooms: mushroomData.getTheMushrooms(),
    basket: mushroomData.getTheBasket(),
  };

  pickAMushroom = () => {
    const randomMushroom = this.state.mushrooms[
      Math.floor(Math.random() * this.state.mushrooms.length)
    ];
    this.setState({
      basket: this.state.basket.concat(randomMushroom),
    });
  };

  render() {
    const { mushrooms, basket } = this.state;
    const buttonClick = () => {
      this.pickAMushroom();
    };
    return (
      <div className='App'>
        <button onClick={buttonClick}>Pick A Mushroom</button>
        <div className="mushBasketWrap">
        <Forest mushrooms={mushrooms} />
        <Basket basket={basket} />
        </div>
      </div>
    );
  }
}

export default App;
