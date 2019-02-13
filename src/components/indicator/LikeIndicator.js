import React from 'react'
import "../../assets/css/likeIndicator.css"
export default function LikeIndicator(props) {
  return (
    <div class="placement">
        <i class="far fa-thumbs-up">
        <p>{props.likes}</p>
        </i>
    </div>
  )
}
