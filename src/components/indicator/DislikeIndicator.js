import React from 'react'

export default function DislikeIndicator(props) {
  return (
    <div className="dislike__indicator">
        <i className="far fa-thumbs-down">
            <p>{props.dislikes}</p>
        </i>
    </div>
  )
}
