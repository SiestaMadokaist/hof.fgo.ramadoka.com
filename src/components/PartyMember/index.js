import React from 'react';
import ServantSlot from '../ServantSlot';
import CESlot from '../CESlot';
export default class PartyMember extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="partymember-mainframe">
        <ServantSlot servant={this.props.servant} onClick={this.props.doRemoveMember}/>
        <CESlot />
      </div>
    )
  }
}
