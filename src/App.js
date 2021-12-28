import React from 'react';
import './App.css';
import Ipod from './Ipod.js';

class App extends React.Component {
  constructor() {
    super();
    this.option1 = ['Home', 'Cover Flow', 'Music', 'Games', 'Settings'];
    this.option2 = ['All Songs', 'Artists', 'Albums'];
    this.components = [
      {
        component: 'Home',
      }
    ];
    this.state = {
      menu: false,
      displayOptions: this.option1,
      currOpt: 0,
      selectedOpt: 0,
    }
  }
  toggleMenu = () => {
    if (this.state.displayOptions === this.option2 && this.state.menu === true) {
      this.setState({
        displayOptions: this.option1,
        currOpt: 0,
        selectedOpt: 0
      })
    }
    else {
      let menu = !this.state.menu;
      // console.log("setting menu:", menu)
      this.setState({
        menu
      })
      if (menu === false) {
        this.setState({
          currOpt: this.state.selectedOpt
        })
      }
    }
  }
  increaseOption = (temp) => {
    this.setState({
      currOpt: temp
    })

  }
  decreaseOption = (temp) => {
    this.setState({
      currOpt: temp
    })
  }
  centerButtonClicked = () => {
    // console.log("Center button clicked");
    if (this.state.currOpt !== 2 || this.state.displayOptions.length!==5) {
      this.setState({
        selectedOpt: this.state.currOpt,
        menu: !this.state.menu,
      })
    }
    else if(this.state.currOpt === 2) {
      this.setState({
        displayOptions: this.option2,
        // menu: !this.state.menu,
        currOpt: 0,
        selectedOpt: 0
      })
    }

  }
  render() {
    return (
      <div className="App">
        <Ipod
          centerButtonClicked={this.centerButtonClicked}
          selectedOpt={this.state.selectedOpt}
          option1={this.option1}
          decreaseOption={this.decreaseOption}
          increaseOption={this.increaseOption}
          toggleMenu={this.toggleMenu}
          components={this.components}
          menu={this.state.menu}
          displayOptions={this.state.displayOptions}
          currOpt={this.state.currOpt} />
      </div>
    );
  }
}

export default App;
