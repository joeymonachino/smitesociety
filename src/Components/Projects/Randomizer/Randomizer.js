import React from 'react';
import randomizerFunctions from './randomizerfunctions';
import './randomizer.css';

//TODO
//


class Randomizer extends React.Component {
  state = { open: false,
          };

  handleDrawerToggle1 = () => {
    this.setState({open: true});
    this.build = randomizerFunctions.printBuild(1);
    return (
      this.build
    );
  };
  handleDrawerToggle2 = () => {
    this.setState({open: true});
    this.build = randomizerFunctions.printBuild(2);
    return (
      this.build
    );
  };
  handleDrawerToggle3 = () => {
    this.setState({open: true});
    this.build = randomizerFunctions.printBuild(3);
      return (
      this.build
    );
  };
  handleDrawerToggle4 = () => {
    this.setState({open: true});
    this.build = randomizerFunctions.printBuild(4);
    return (
      this.build
    );
  };
  handleDrawerToggle5 = () => {
    this.setState({open: true});
    this.build = randomizerFunctions.printBuild(5);
    return (
      this.build
    );
  };

  render() {
    return (
      <div className='buttonDivBanner'>
        <div className='buttonsDiv'>
          <button className='button' onClick={this.handleDrawerToggle1}>1</button>
          <button className='button' onClick={this.handleDrawerToggle2}>2</button>
          <button className='button' onClick={this.handleDrawerToggle3}>3</button>
          <button className='button' onClick={this.handleDrawerToggle4}>4</button>
          <button className='button' onClick={this.handleDrawerToggle5}>5</button>
        </div>
      <p>
      {this.state.open ? this.build : null}
      </p>
    </div>
    );
  }
}


/*
const Randomizer = props => {
  return (
    <div className='ButtonForm'>
    <ButtonForm />
    </div>
  );
}
*/
export default Randomizer;