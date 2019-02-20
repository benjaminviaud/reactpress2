import React from 'react';
import { Menu as Nav, MenuItem } from 'react-foundation';
import { DropdownMenu } from 'foundation-sites';
import './Menu.scss';
import $ from 'jquery';

class Menu extends React.Component {
  componentDidMount() {
    new DropdownMenu($('.dropdown'));
  }

  render() {
    return (
      <Nav isDropdown>
        <MenuItem>
          <a href="/">Home</a>
          <Nav isVertical>
            <MenuItem>
              <a href="#t">One</a>
            </MenuItem>
            <MenuItem>
              <a href="#t">Two</a>
            </MenuItem>
            <MenuItem>
              <a href="#t">Three</a>
            </MenuItem>
          </Nav>
        </MenuItem>
        <MenuItem>
          <a href="/about">About</a>
        </MenuItem>
        <MenuItem>
          <a href="#t">Three</a>
        </MenuItem>
      </Nav>
    );
  }
}

export default Menu;
