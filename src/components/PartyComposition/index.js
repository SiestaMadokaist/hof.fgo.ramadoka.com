import React from 'react';
import PartyMember from '../PartyMember';
import s from './styles.css';
export default class PartyComposition extends React.Component {
  constructor(props){
    super(props);
  }

  servants(){
    return this.props.partyMembers || [];
  }

  removeMember(i){
    return () => {
      this.props.doRemoveMember(i);
    };
  }

  partyMembers(){
    const accumulator = [];
    const servants = this.servants();
    for(let i in servants){
      let servant = servants[i];
      let dom = <PartyMember servant={servant} key={i} doRemoveMember={this.removeMember.bind(this)(i)}/>
      accumulator.push(dom)
    };
    return accumulator;
  }

  render(){
    return (
      <div className="partycomposition-mainframe">
        {this.partyMembers()}
      </div>
    )
  }
}
