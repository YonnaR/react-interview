import React, { Component } from 'react'
import "../assets/css/card.css"
import Card from './Card';
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
    const {data} = this.state
    return (
        <ul class="cards">
            {data.map((val , i)=> <Card title={val.title} category={val.category} likes={val.likes} dislikes={val.dislikes}/> )}
        </ul>
    )
  }
}
