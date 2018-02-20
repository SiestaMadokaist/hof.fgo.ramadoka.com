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

  render(){
    const partyMember = this.partyMember();
    return (
      <div className="ceslot-mainframe">
        <div className="ceslot-raritylevel">
          CE Rarity: {this.rarityLevel()}
        </div>
        <input min='0' max='5' value={partyMember.ceRarity()} type='range' onChange={this.setRarityLevel.bind(this)} />
      </div>
    )
  }
}
