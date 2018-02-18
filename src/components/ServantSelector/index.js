import React from 'react';
import axios from 'axios';
import { API_HOST } from '../../config';
import ServantPicker from '../ServantPicker';
const __memo__ = {}
export default class ServantSelector extends React.Component {
  static async getServants(){
    if(__memo__.servants === undefined){
      const { data } = await axios.get(`${API_HOST}/servants`);
      __memo__.servants = data;
      return __memo__.servants;
    } else {
      return __memo__.servants;
    }
  }

  constructor(props){
    super(props);
    this.state = {
      servants: undefined,
      filter: undefined,
    }
  }

  dataLoaded(){
    return this.state.servants !== undefined
  }

  componentWillMount(){
    ServantSelector.getServants().then((servants) => {
      this.setState({ servants: servants });
    });
  }

  beforeDataLoaded(){
    return (
      <div>
        data not loaded
      </div>
    )
  }

  filteredServants(){
    const { filter, servants } = this.state;
    if(filter === ''){ return servants;  }
    if(filter === undefined){ return servants; }
    return servants.filter(s => s.name.toLowerCase().match(filter.toLowerCase()));
  }

  servantPickers(){
    const servants = this.filteredServants();
    return servants.map(servant => {
      return (
        <ServantPicker servant={servant} key={servant.id} onClick={this.props.onSelectServant}/>
      );
    });
  }

  setFilter(e){
    this.setState({ filter: e.target.value });
  }

  servantFilter(){
    return (
      <div>
        <input type="text" onChange={this.setFilter.bind(this)} style={{fontSize: 'x-large', width: '100%'}} />
      </div>
    )
  }

  afterDataLoaded(){
    return (
      <div className='servantselector-mainframe'>
        {this.servantFilter()}
        <div className="servantselector-picker">
          {this.servantPickers()}
        </div>
      </div>
    )
  }

  render(){
    if(this.dataLoaded()){
      return this.afterDataLoaded();
    } else {
      return this.beforeDataLoaded();
    }
  }
}
