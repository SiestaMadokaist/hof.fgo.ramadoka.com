import React from 'react';

export default class CESlot extends React.Component {
  constructor(props){
    super(props);
  }

  partyMember(){
    return this.props.partyMember;
  }

  rarityName(i){
    return ['', 'Common', 'Uncommon', 'Rare', 'SR', 'SSR'][i];
  }

  rarityLevel(){
    return this.rarityName(this.partyMember().ceRarity())
  }

  ceRarityLevel(){
    return this.partyMember().ceRarity();
  }

  setRarityLevel(e){
    this.partyMember().setCERarity(e.target.value);
    this.props.updateState();
  }

  setCEEventBuff(e){
    this.partyMember().setCEEventBuff(e.target.value);
    this.props.updateState();
  }

  ceEventBuffMultiplierPercentage(){
    return this.partyMember().ceEventBuffMultiplierPercentage();
  }

  render(){
    const partyMember = this.partyMember();
    return (
      <div className="ceslot-mainframe">
        <div className="ceslot-raritylevel circled-border">
          <div className="ceslot-text-legend">
            CE Rarity: {this.rarityLevel()}
          </div>
          <input min='0' max='5' value={partyMember.ceRarity()} type='range' onChange={this.setRarityLevel.bind(this)} className="ceslot-slider" />
        </div>
        <div className="ceslot-eventbuff circled-border">
          <div className="ceslot-text-legend">
            Damage Buff: {this.ceEventBuffMultiplierPercentage()}%
          </div>
          <input min='0' max='10' value={partyMember.ceEventBuff()} type='range' onChange={this.setCEEventBuff.bind(this)} className="ceslot-slider"/>
        </div>
      </div>
    )
  }
}
