import React from 'react'
import LikeIndicator from './indicator/LikeIndicator';
import DislikeIndicator from './indicator/DislikeIndicator';
import DislikeButton from './buttons/DislikeButton';
import LikeButton from './buttons/LikeButton';


export default function Card(props){
  return (
    <li className="cards__item">
        <button onClick={props.onDelete} className="card__delete">X</button>
        <div className="card">
            <div className="card__image card__image--video"></div>
            <div className="card__content">
                <div className="card__title">{props.title}</div>
                <p className="card__category">{props.category}</p>
                <div className="card__button">
                    <LikeButton onClick={props.onLike}/>
                    <DislikeButton onClick={props.onDislike}/>
                </div>
            </div>
            <div className="card__indicator">
                <LikeIndicator likes={props.likes} />
                <DislikeIndicator dislikes={props.dislikes}/>
            </div>
        </div>
    </li>
  )
}
