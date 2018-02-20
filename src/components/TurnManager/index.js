import React from 'react';
export default class TurnManager extends React.Component {

  constructor(props){
    super(props);
    this.state = { turnCount: 0 }
  }

  manageTurn(e){
    const { setTurnCount } = this.props;
    setTurnCount(e.target.value);
  }

  turnCount(){
    return this.props.getTurnCount();
  }

  render(){
    return (
      <div className='turnmanager-mainframe'>
        <input type='range' min='1' max='50' defaultValue='1' onChange={this.manageTurn.bind(this)} />
        <span className='turnmanager-turnlength'>
          {this.turnCount()} Turn
        </span>
      </div>
    )
  }
}
