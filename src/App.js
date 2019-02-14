import React, { Component } from 'react';
import { movies$ } from "./assets/data/movies";
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import ActivityIndicator from './components/indicator/ActivityIndicator';
import Paging from './components/buttons/Paging';
import Category from './components/buttons/Category';
import SelectCount from './components/buttons/SelectCount';
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
    this.handleBackPage = this.handleBackPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
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
      movies: prevState.movies.map(movie => {
        if (movie.id === m.id) {
          movie.dislikes += 1;
          return movie;
        } else {
          return movie;
        }
      })
    }));
  }

  handleLike(m) {
    this.setState(prevState=>({
      movies: prevState.movies.map(movie => {
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

  handleBackPage() {
    this.setState({
      page: Math.max(
        this.state.page - 1,
        0
      )
    });
  }
  handleNextPage() {
    const { count, page, movies } = this.state;
    this.setState({
      page: Math.min(
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
        <Navbar/>
        <div className="container">
          <Category
            onFilter={this.handleFilter}
            categories={categories}
          />
          <SelectCount 
            onCountSelect={this.handleCountSelect}
          />
        </div>
        {this.state.isLoading?<ActivityIndicator/>:
        <CardList 
          d={filtered} 
          onDelete={this.handleDelete}
          onLike={this.handleLike}
          onDislike={this.handleDislike}
          />}
          <Paging
            onBackPage={this.handleBackPage}
            onNextPage={this.handleNextPage}
            page={page}
          />
      </div>
    );
  }
}

export default App;
