import React, { Component } from 'react'
import LikeIndicator from './indicator/LikeIndicator';
import DislikeIndicator from './indicator/DislikeIndicator';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            category: props.category,
            likes: props.likes,
            dislikes: props.dislikes,
            liked:null
        }
    }
    handleLike=()=>{
        if(this.state.liked==null){
            this.setState(prevState=>({liked:true,likes:prevState.likes+1}));
        }
        else if(this.state.liked){
            this.setState(prevState=>({likes:prevState.likes+1,dislikes:prevState.dislikes-1}));
        }else{
            this.setState(prevState=>({dislikes:prevState.dislikes+1, likes:prevState.likes-1}));
        }
    }
    render() {
        const { id, title, category, likes, dislikes, liked } = this.state;
        return (
            <li class="cards__item">
                <div class="card">
                <div class="card__image card__image--fence"></div>
                <div class="card__content">
                    <div class="card__title">{title}</div>
                    <p class="card__category">{category}</p>
                    <button onClick={this.handleLike} class="btn btn--block card__btn">{liked?"dislikes":"likes"}</button>
                </div>
                <LikeIndicator likes={likes} />
                <DislikeIndicator dislikes={dislikes}/>
                </div>
            </li>
        )
    }
}
