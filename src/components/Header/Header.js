import React from 'react';
import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';
import './Header.scss';
import logo from '../../images/logo.svg';

class Header extends React.Component {
  render() {
    const img = <img src={logo} className="logo" alt="Logo" />;

    return <TopBar topBarLeft={img} topBarRight={<Menu />} />;
  }
}

export default Header;
