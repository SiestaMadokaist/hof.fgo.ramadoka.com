import React from 'react';
export default class CalculationResult extends React.Component {
  constructor(props){
    super(props);
  }

  partyMembers(){
    return this.props.partyMembers;
  }

  partyCosts(){
    return this.partyMembers().map(x => x.totalCost());
  }

  turnCount(){
    return this.props.getTurnCount();
  }

  totalPartyCost(){
    return this.partyCosts().reduce((accl, cost) => accl + cost, 0);
  }

  turnCountMultiplier(){
    return 1 - Math.exp(-this.turnCount() / 3);
  }

  fightIndex(){
    return this.totalPartyCost() * this.turnCountMultiplier();
  }

  render(){
    return (
      <div className='calc-result-mainframe'>
        Your Fight Index: {this.fightIndex()}
      </div>
    )
  }
}
