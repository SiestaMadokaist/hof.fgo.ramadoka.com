import React from 'react';
import ServantSelector from 'components/ServantSelector';
import PartyComposition from 'components/PartyComposition';
import TurnManager from 'components/TurnManager';
import CalculationResult from 'components/CalculationResult';
import {Helmet} from 'react-helmet';

import MPartyMember from 'models/PartyMember';
const ImageUploader = () => (<div></div>);

export default class HoFCalculator extends React.Component {
  constructor(props){
    super(props);
    this.state = { partyMembers: [], lastUpdate: 0, turnCount: 1, height: window.innerHeight, width: window.innerWidth}
  }

  addMembers(servant){
    const { partyMembers } = this.state;
    if(partyMembers.length >= 6){
      return false;
    }
    const partyMember = new MPartyMember({ servant });
    this.setState({ partyMembers: partyMembers.concat(partyMember) });
  }

  updateState(){
    this.setState({ lastUpdate: Date.now() });
  }

  componentWillMount(){
    window.addEventListener('resize', () => { this.setState({ width: window.innerWidth, height: window.innerHeight })});
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

  partyMembers(){
    return this.state.partyMembers;
  }

  totalCost(){
    return this.partyMembers().map(pm => pm.npLevel());
  }

  setTurnCount(turnCount){
    this.setState({ turnCount: parseInt(turnCount) });
  }

  getTurnCount(){
    return this.state.turnCount;
  }

  desktopView(){
    const { partyMembers } = this.state;
    return (
      <div>
        <Helmet>
          <title>HoF Calculator</title>
        </Helmet>
        <PartyComposition partyMembers={partyMembers} doRemoveMember={this.removeMember.bind(this)} updateState={this.updateState.bind(this)}/>
        <div className='hofc-bottom-mainframe-desktop'>
          <div className='hofc-leftside-mainframe'>
            <ServantSelector onSelectServant={this.addMembers.bind(this)}/>
          </div>
          <div className='hofc-rightside-mainframe'>
            <TurnManager setTurnCount={this.setTurnCount.bind(this)} getTurnCount={this.getTurnCount.bind(this)}/>
            <CalculationResult partyMembers={partyMembers} getTurnCount={this.getTurnCount.bind(this)} />
            <ImageUploader />
          </div>
        </div>
      </div>
    )
  }

  mobileView(){
    const { partyMembers } = this.state;
    return (
      <div>
        <Helmet>
          <title>HoF Calculator</title>
        </Helmet>
        <PartyComposition partyMembers={partyMembers} doRemoveMember={this.removeMember.bind(this)} updateState={this.updateState.bind(this)}/>
        <div className='hofc-bottom-mainframe-mobile'>
          <div className='hofc-part2-mainframe'>
            <TurnManager setTurnCount={this.setTurnCount.bind(this)} getTurnCount={this.getTurnCount.bind(this)}/>
            <CalculationResult partyMembers={partyMembers} getTurnCount={this.getTurnCount.bind(this)} />
          </div>
          <div className='hofc-part3-mainframe'>
            <ServantSelector onSelectServant={this.addMembers.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }

  selectedView(){
    const { width } = this.state;
    if(width < 1024){ return this.mobileView(); }
    else { return this.desktopView(); }
  }

  render(){
    return (
      <div>
        {this.selectedView()}
      </div>
    )
  }
}
