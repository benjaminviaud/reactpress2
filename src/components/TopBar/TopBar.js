import React from 'react';
import { TopBar as Bar, TopBarLeft, TopBarRight } from 'react-foundation';
import './TopBar.scss';

class TopBar extends React.Component {
  render() {
    return (
      <Bar>
        <TopBarLeft>{this.props.topBarLeft}</TopBarLeft>
        <TopBarRight>{this.props.topBarRight}</TopBarRight>
      </Bar>
    );
  }
}

export default TopBar;
