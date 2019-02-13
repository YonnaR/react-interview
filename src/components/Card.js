import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state({
            id: props.id,
            title: props.title,
            category: props.category,
            likes: props.likes,
            dislikes: props.dislikes
        })
    }
    render() {
        const { id, title, category, likes, dislikes } = this.state;
        return (
        <div>
            
        </div>
        )
    }
}
