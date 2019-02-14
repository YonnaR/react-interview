import React from 'react'

export default function Paging(props){
  return (
    <div className="paging__container">
        <div className="paging__div">
            <button className="paging__button">

            </button>
            <button className="paging__button">
                {props.count}
            </button>
            <button className="paging__button">

            </button>
        </div>
    </div>
  )
}
