import React, { Component } from 'react';
import { movies$ } from "./assets/data/movies";
import CardList from './components/CardList';
import Header from './components/Header';
import ActivityIndicator from './components/indicator/ActivityIndicator';
import Paging from './components/Paging';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      movies:[],
      filter: null,
      page: 0,
      count:0,
    }
    movies$.then(result=>{
      this.setState({
        isLoading:false,
        movies: result,
        count: result.length
      })
    })

    this.handleFilter = this.handleFilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handleCountSelect = this.handleCountSelect.bind(this);
    this.handlePageBack = this.handlePageBack.bind(this);
    this.handlePageNext = this.handlePageNext.bind(this);
  }


  handleFilter(f) {
    this.setState({ filter: f });
  }

  handleDelete(m) {
    this.setState(prevState=>({
      movies: prevState.movies.filter(movie => movie.id !== m.id)
    }));
  }

  handleDislike(m) {
    this.setState(prevState=>({
      movies: prevState.movie.map(movie => {
        if (movie.id === m.id) {
          movie.likes += -1;
          return movie;
        } else {
          return movie;
        }
      })
    }));
  }

  handleLike(m) {
    this.setState(prevState=>({
      movies: prevState.movie.map(movie => {
        if (movie.id === m.id) {
          movie.likes += 1;
          return movie;
        } else {
          return movie;
        }
      })
    }));
  }

  handlePageSelect(i) {
    this.setState({ page: i });
  }

  handlePageBack() {
    this.setState({
      page: Math.max(
        this.state.page - 1,
        0
      )
    });
  }
  handlePageNext() {
    const { count, page, movies } = this.state;
    this.setState({
      currentSelectedPageIndex: Math.min(
        page + 1,
        movies.length / count
      )
    });
  }

  handleCountSelect(c) {
    this.setState({ count: c });
  }
  
  render() {
    console.log(this.state)
    const {
      movies,
      filter,
      page,
      count
    } = this.state;
    const indexD = count * page;
    const indexA = count * (page + 1);
    let filtered = filter !== null? movies.filter(movies => movies.category === filter): movies;
    filtered = filtered.slice(indexD, indexA);
    let categories = movies.map(movie => movie.category);
    categories = Array.from(new Set(categories));
    console.log(categories)
    return (
      <div className="App">
        <Header/>
        {this.state.isLoading?<ActivityIndicator/>:
        <CardList 
          d={filtered} 
          onDelete={this.handleDelete}
          onLike={this.handleLike}
          onDislike={this.handleDislike}
          />}
          <Paging/>
      </div>
    );
  }
}

export default App;
