import EventEmitter from 'events';
export default class MPartyMember {
  constructor({ servant }){
    this.props = { servant };
    this.state = { npLevel: 1, ceRarity: 0 }
  }

  npLevel(){
    return this.state.npLevel;
  }

  isDamagingNp(){
    return this.servant().is_damaging_np;
  }

  isNonDamagingNp(){
    return !this.isDamagingNp();
  }

  isWelfare(){
    return this.servant().is_welfare;
  }

  isSRServant(){
    return this.servant().star === 4;
  }

  isSSRServant(){
    return this.servant().star === 5;
  }

  excessCostMultiplier(){
    if(this.isWelfare()){ return 2; }
    if(this.isSRServant() && this.isNonDamagingNp()){ return 2; }
    if(this.isSRServant() && this.isDamagingNp()){ return 3;}
    if(this.isSSRServant() && this.isNonDamagingNp()){ return 4; }
    if(this.isSSRServant() && this.isDamagingNp()){ return 5; }
    return 0; // ????
  }

  excessCost(){
    if(this.servant().star <= 3){ return 0; }
    return Math.sqrt(this.npLevel() - 1) * this.excessCostMultiplier();
  }

  servantStar(){
    return this.servant().star;
  }

  servantCost(){
    if(this.servantStar() === 1){ return 3; }
    if(this.servantStar() === 2){ return 4; }
    if(this.servantStar() === 3){ return 7; }
    if(this.servantStar() === 4){ return 12; }
    if(this.servantStar() === 5){ return 16; }
  }

  ceCost(){
    if(this.ceRarity() === 0){ return 0; }
    if(this.ceRarity() === 1){ return 1; }
    if(this.ceRarity() === 2){ return 3; }
    if(this.ceRarity() === 3){ return 5; }
    if(this.ceRarity() === 4){ return 9; }
    if(this.ceRarity() === 5){ return 12; }
  }

  overCost(){
    //TODO;
  }

  supportTier(){
    return this.servant().support_tier;
  }

  overCostMultiplier(){
    if(this.supportTier() === 1){ return 2; }
    if(this.supportTier() === 2){ return 1; }
    return 0;
  }

  overCost(){
    return this.servantCost()  * this.overCostMultiplier();
  }

  totalCost(){
    return this.servantCost() + this.excessCost() + this.ceCost() + this.overCost();
  }

  ceRarity(){
    return this.state.ceRarity;
  }

  servant(){
    return this.props.servant;
  }

  setNPLevel(level){
    this.state.npLevel = parseInt(level);
  }

  setCERarity(rarity){
    this.state.ceRarity = parseInt(rarity);
  }
}
