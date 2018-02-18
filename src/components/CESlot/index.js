import React from 'react';

export default class CESlot extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rarity: 0
    };
  }

  rarityName(i){
    return ['', 'Common', 'Uncommon', 'Rare', 'SR', 'SSR'][i];
  }

  rarityLevel(){
    return this.rarityName(this.state.rarity);
  }

  setRarityLevel(e){
    this.setState({rarity: e.target.value});
  }

  ce(){
    return this.props.ce;
  };

  render(){
    return (
      <div className="ceslot-mainframe">
        <div className="ceslot-raritylevel">
          CE Rarity: {this.rarityLevel()}
        </div>
        <input min='0' max='5' defaultValue='0' type='range' onChange={this.setRarityLevel.bind(this)} />
      </div>
    )
  }
}
