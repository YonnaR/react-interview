import React from 'react'

export default function DislikeIndicator(props) {
  return (
    <div className="placement">
        <i className="far fa-thumbs-down">
            <p>{props.dislikes}</p>
        </i>
    </div>
  )
}
