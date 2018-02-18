import React from 'react';
export default class TurnManager extends React.Component {

  constructor(props){
    super(props);
    this.state = { turnCount: 0 }
  }

  manageTurn(e){
    this.setState({turnCount: e.target.value})
  }

  turnCount(){
    return this.state.turnCount;
  }

  render(){
    return (
      <div className='turnmanager-mainframe'>
        <input type='range' min='0' max='200' defaultValue='0' onChange={this.manageTurn.bind(this)} />
        <span className='turnmanager-turnlength'>
          {this.turnCount()} Turn
        </span>
      </div>
    )
  }
}
