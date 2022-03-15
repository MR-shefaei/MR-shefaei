import React, { Component } from 'react';
import './App.css';
import {Cards , Charts , CountryPicker} from './components';
import styles from './components/App.module.css';
import { fetchData } from './api';


class App extends React.Component {

  state = {
    data : {},
  }

 async componentDidMount () {
    const fetchdata = await fetchData();
    this.setState({data:fetchdata})
  }
  render(){
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data = {data}/>
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
