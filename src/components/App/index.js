import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../helpers/Routes';
import MyNavbar from '../Navbar';
import mushroomData from '../../helpers/data/mushroomData';

class App extends React.Component {
  state = {
    mushrooms: mushroomData.getTheMushrooms(),
    basket: mushroomData.getTheBasket(),
    youWin: false,
    recentMushroom: '',
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
        recentMushroom: randomMushroom.name,
      });
    }
    if (randomMushroom.isDeadly === true) {
      this.setState({
        basket: [],
        youWin: false,
        recentMushroom: randomMushroom.name,
      });
    }
    if (randomMushroom.isMagic === true) {
      this.setState({
        basket: this.state.basket.concat(mushroomData.getNonMagic()),
        youWin: true,
        recentMushroom: randomMushroom.name,
      });
    }
  };

  render() {
    const {
      mushrooms,
      basket,
      youWin,
      recentMushroom,
    } = this.state;
    return (
      <div className='App'>
        <Router>
        <MyNavbar basket={basket} recentMushroom={recentMushroom} pickAMushroom={this.pickAMushroom}/>
        {youWin ? (<div className="youWinALert">
          <h1>YOU WIN!! YOU FOUND THE MAGIC MUSHROOM!!!!!!</h1>
        </div>) : <></>}
        <Routes mushrooms={mushrooms} basket={basket}/>
        </Router>
      </div>
    );
  }
}

export default App;
