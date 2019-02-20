import React from 'react';
import $ from 'jquery';
import { Menu as Nav, MenuItem } from 'react-foundation';
import { DropdownMenu } from 'foundation-sites';
import './Menu.scss';

class Menu extends React.Component {
  componentDidMount() {
    new DropdownMenu($('.dropdown'));
  }

  render() {
    return (
      <Nav isDropdown>
        <MenuItem>
          <a href="#t">One</a>
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
          <a href="#t">Two</a>
        </MenuItem>
        <MenuItem>
          <a href="#t">Three</a>
        </MenuItem>
      </Nav>
    );
  }
}

export default Menu;
