import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import Alert from '../Alert';

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Mushroom Picker</NavbarBrand>
          <Nav className='mr-auto' navbar>
            <NavItem>
            <Link className='nav-link' to='/'>Forest</Link>
            </NavItem>
            <NavItem>
            <Link className='nav-link' to='/basket'>Basket</Link>
            </NavItem>
          </Nav>
          <Alert recentMushroom={this.props.recentMushroom}/>
        <button className="btn btn-success mr-4" onClick={this.props.pickAMushroom}>Pick A Mushroom</button>
          <NavbarText>
            Your Basket Count is {this.props.basket.length}
          </NavbarText>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
