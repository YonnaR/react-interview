import React, { Component } from 'react';
import { movies$ } from "./assets/data/movies";
import CardList from './components/CardList';
import Header from './components/Header';
import ActivityIndicator from './components/indicator/ActivityIndicator';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      movies:[],
      filter: null,
      selectedPage: 0,
      selectedCount:0
    }
    movies$.then(result=>{
      this.setState(prevState=>({
        isLoading:false,
        movies: result,
        SelectedCount: result.length
      }))
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.isLoading?<ActivityIndicator/>:<CardList d={this.state}/>}
      </div>
    );
  }
}

export default App;
