import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Banner from './components/Banner';
import CardContainer from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Menu />
        <CardContainer />
      </div>
    );
  }
}

export default App;
