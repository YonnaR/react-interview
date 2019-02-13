import React, { Component } from 'react'

export default class CardList extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            filter: null,
            selectedPage: 0,
            selectedCount:0
        }
    }
    componentDidMount(){
        this.setState({
            data:[...this.props.d.movies]
        })
    }
  render() {
      console.log(this.state)
    return (
      <div>
        <h1>HelloWorld</h1>
      </div>
    )
  }
}
