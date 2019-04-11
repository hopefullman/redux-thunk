import React, { Component ,Fragment} from 'react';
import store from './store/store.js';
import {ONINITACTIONN,ONCHANGEACTION,ONSUBACTION,ONDELACTION} from './store/actionCreate.js';
// import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this.subscribe=this.subscribe.bind(this);
    this.onchange=this.onchange.bind(this);
    this.onsub=this.onsub.bind(this);
    store.subscribe(this.subscribe)
  }
  componentDidMount(){
    const action=ONINITACTIONN();
    store.dispatch(action);
  }
  subscribe(){
    this.setState(store.getState())
  }
  onchange(e){
    const action=ONCHANGEACTION(e.target.value)
    store.dispatch(action)
  }
  onsub(){
    const action=ONSUBACTION();
    store.dispatch(action)
  }
  ondel(index){
    const action=ONDELACTION(index);
    store.dispatch(action)
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.value} onChange={this.onchange}/> 
          <button onClick={this.onsub}>添加</button>
        </div>
        { 
          this.state.list.map((item,index)=>{
            return <li key={index} onClick={this.ondel.bind(this,index)}>{item}</li>
          })
        }
        
      
      </Fragment>
    );
  }
}

export default App;
