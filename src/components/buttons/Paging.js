import React from 'react'
import "../../assets/css/paging.css"

export default function Paging(props){
  return (
    <div className="paging__container">
        <div className="paging__div">
            <button onClick={props.onBackPage} className="paging__button">
                <i className="fas fa-arrow-left"></i>
            </button>
            <button className="paging__button">
                {props.page}
            </button>
            <button onClick={props.onNextPage} className="paging__button">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
