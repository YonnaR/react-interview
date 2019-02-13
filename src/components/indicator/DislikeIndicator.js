import React from 'react'

export default function DislikeIndicator(props) {
  return (
    <div class="placement">
        <i class="far fa-thumbs-down">
            <p>{props.dislikes}</p>
        </i>
    </div>
  )
}
