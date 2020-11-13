import React from 'react';
import MyNavbar from '../Navbar';
import Forest from '../Forest';
import Basket from '../Basket';
import mushroomData from '../../helpers/data/mushroomData';

class App extends React.Component {
  state = {
    mushrooms: mushroomData.getTheMushrooms(),
    basket: mushroomData.getTheBasket(),
    youWin: false,
  };

  pickAMushroom = () => {
    const randomMushroom = this.state.mushrooms[
      Math.floor(Math.random() * this.state.mushrooms.length)
    ];
    if (
      randomMushroom.isDeadly === false
      && randomMushroom.isPoisonous === false
      && randomMushroom.isMagic === false
    ) {
      this.setState({
        basket: this.state.basket.concat(randomMushroom),
        youWin: false,
      });
    }
    if (randomMushroom.isDeadly === true) {
      this.setState({
        basket: [],
        youWin: false,
      });
    }
    if (randomMushroom.isMagic === true) {
      this.setState({
        basket: this.state.basket.concat(mushroomData.getNonMagic()),
        youWin: true,
      });
    }
  };

  render() {
    const { mushrooms, basket, youWin } = this.state;
    const buttonClick = () => {
      this.pickAMushroom();
    };
    return (
      <div className='App'>
        <MyNavbar basket={basket}/>
        <button onClick={buttonClick}>Pick A Mushroom</button>
        {youWin ? (<div className="youWinALert">
          <h1>YOU WIN!! YOU FOUND THE MAGIC MUSHROOM!!!!!!</h1>
        </div>) : <></>}
        <div className='mushBasketWrap'>
          <Forest mushrooms={mushrooms} />
          <Basket basket={basket} />
        </div>
      </div>
    );
  }
}

export default App;
