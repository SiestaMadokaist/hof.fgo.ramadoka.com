import React from 'react';
import PartyMember from '../PartyMember';
import s from './styles.css';
export default class PartyComposition extends React.Component {
  constructor(props){
    super(props);
  }

  partyMembers(){
    return this.props.partyMembers || [];
  }

  servants(){
    return this.props.partyMembers.map(pm => pm.servant()) || [];
  }

  removeMember(i){
    return () => {
      this.props.doRemoveMember(i);
    };
  }

  partyMemberDOMs(){
    const accumulator = [];
    const partyMembers = this.partyMembers();
    for(let i in partyMembers){
      let partyMember = partyMembers[i];
      let dom = <PartyMember updateState={this.props.updateState} partyMember={partyMember} key={i} doRemoveMember={this.removeMember.bind(this)(i)}/>
      accumulator.push(dom)
    };
    return accumulator;
  }

  render(){
    return (
      <div className="partycomposition-mainframe">
        <div className='partycomposition-wrapper'>
          {this.partyMemberDOMs()}
        </div>
      </div>
    )
  }
}
