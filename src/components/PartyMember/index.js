import React from 'react';
import ServantSlot from '../ServantSlot';
import CESlot from '../CESlot';
export default class PartyMember extends React.Component {
  constructor(props){
    super(props);
  }

  partyMember(){
    return this.props.partyMember;
  }

  servant(){
    return this.partyMember().servant();
  }

  onNPLevelChanged(level){
    this.partyMember().setNPLevel(level);
  }

  render(){
    const self = this;
    return (
      <div className="partymember-mainframe">
        <ServantSlot partyMember={this.partyMember()} doRemoveMember={this.props.doRemoveMember} updateState={this.props.updateState}/>
        <CESlot partyMember={this.partyMember()} updateState={this.props.updateState}/>
      </div>
    )
  }
}
