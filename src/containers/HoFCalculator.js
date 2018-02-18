import React from 'react';
import ServantSelector from 'components/ServantSelector';
import PartyComposition from 'components/PartyComposition';
import TurnManager from 'components/TurnManager';
export default class HoFCalculator extends React.Component {
  constructor(props){
    super(props);
    this.state = { partyMembers: [] }
  }

  addMembers(servant){
    const { partyMembers } = this.state;
    if(partyMembers.length >= 6){
      return false;
    }
    this.setState({ partyMembers: partyMembers.concat(servant) });
  }

  removeMember(removedNumber){
    const { partyMembers } = this.state;
    const newParty = [];
    for(let i in partyMembers){
      if(i !== removedNumber){
        newParty.push(partyMembers[i]);
      }
    }
    this.setState({ partyMembers: newParty });
  }

  render(){
    const { partyMembers } = this.state;
    return (
      <div>
        <PartyComposition partyMembers={partyMembers} doRemoveMember={this.removeMember.bind(this)}/>
        <TurnManager />
        <ServantSelector onSelectServant={this.addMembers.bind(this)}/>
      </div>
    )
  }
}
