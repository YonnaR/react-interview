import React from 'react'
import "../../assets/css/likeIndicator.css"
export default function LikeIndicator(props) {
  return (
    <div className="like__indicator">
        <i className="far fa-thumbs-up">
          <p>{props.likes}</p>
        </i>
    </div>
  )
}
