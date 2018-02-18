import React from 'react';
import { IMAGE_HOST } from '../../config';
export default class ServantSlot extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      npLevel: 1,
    };
  }

  servant(){
    return this.props.servant || {};
  }

  servantId(){
    return this.servant().id;
  }

  servantImageURL(){
    console.log(this.servantId());
    return `${IMAGE_HOST}/assets/servants.thumbnail/${this.servantId()}.png`;
  }

  style(){
    return {
      backgroundImage: `url(${this.servantImageURL()})`,
    };
  }

  setNPLevel(e){
    this.setState({
      npLevel: e.target.value
    });
  }

  close(e){
    const servantId = this.servantId();
    this.setState({ servantId: servantId ^ 1 });
  }

  hasServant(){
    const { servantId } = this.props;
    return servantId !== undefined;
  }

  removeMember(e){
    console.log(this.props);
    this.props.onClick(this.props.key);
  }

  render(){
    return (
      <div className='servantslot-mainframe'>
        <div className="servantslot-closebutton" onClick={this.removeMember.bind(this)}>
          X
        </div>
        <img src={this.servantImageURL()} />
        <div className='servantslot-nplevel'>
          <span>
            NP: {this.state.npLevel}
          </span>
          <input min='1' max='5' defaultValue='1' type="range" onChange={this.setNPLevel.bind(this)}/>
        </div>
      </div>
    )
  }
}

