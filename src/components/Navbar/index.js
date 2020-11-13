import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Mushroom Picker</NavbarBrand>
          <Nav className='mr-auto' navbar>
            <NavItem>
            </NavItem>
          </Nav>
          <NavbarText>
            Your Basket Count is {this.props.basket.length}
          </NavbarText>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
