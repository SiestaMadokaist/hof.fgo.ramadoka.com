import React from 'react';
import { IMAGE_HOST } from '../../config';

export default class ServantPicker extends React.Component {
  constructor(props){
    super(props);
  }

  servant(){
    return this.props.servant;
  }

  servantName(){
    return this.servant().name;
  }

  servantId(){
    return this.servant().id;
  }

  servantImageURL(){
    return `${IMAGE_HOST}/assets/servants.thumbnail/${this.servantId()}.png`;
  }

  style(){
    return {
      backgroundImage: `url(${this.servantImageURL()})`
    }
  }

  onClick(e){
    this.props.onClick(this.servant());
  }

  render(){
    return (
      <div className="servantpicker-mainframe" onClick={this.onClick.bind(this)}>
        <img src={this.servantImageURL()} title={this.servantName()}/>
        <div className="servantpicker-detail">
          {this.servantName()}:{this.servantId()}
        </div>
      </div>
    )
  }
}
