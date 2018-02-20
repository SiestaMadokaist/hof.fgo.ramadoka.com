import React from 'react';
import { IMAGE_HOST } from '../../config';
export default class ServantSlot extends React.Component {

  constructor(props){
    super(props);
  }

  partyMember(){
    return this.props.partyMember;
  }

  servant(){
    return this.partyMember().servant() || {};
  }

  servantId(){
    return this.servant().id;
  }

  servantImageURL(){
    return `${IMAGE_HOST}/assets/servants.thumbnail/${this.servantId()}.png`;
  }

  style(){
    return {
      backgroundImage: `url(${this.servantImageURL()})`,
    };
  }

  setNPLevel(e){
    const npLevel = e.target.value;
    this.partyMember().setNPLevel(npLevel);
    this.props.updateState();
  }

  hasServant(){
    const { servantId } = this.props;
    return servantId !== undefined;
  }

  removeMember(e){
    this.props.doRemoveMember(this.props.key);
  }

  render(){
    const partyMember = this.partyMember();
    return (
      <div className='servantslot-mainframe'>
        <div className="servantslot-closebutton" onClick={this.removeMember.bind(this)}>
          X
        </div>
        <img src={this.servantImageURL()} />
        <div className='servantslot-nplevel'>
          <span>
            NP: {partyMember.npLevel()}
          </span>
          <input min='1' max='5' type="range" onChange={this.setNPLevel.bind(this)} value={partyMember.npLevel()}/>
        </div>
      </div>
    )
  }
}

