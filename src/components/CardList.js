import React from 'react'
import "../assets/css/card.css"
import Card from './Card';

export default (props) => {
  return (
    <ul className="cards">
        {props.d.map((val , i)=> {
            return <Card 
                key={i}
                title={val.title} 
                category={val.category} 
                likes={val.likes} 
                dislikes={val.dislikes} 
                onDelete={()=>props.onDelete(val)} 
                onLike={()=>props.onLike(val)} 
                onDislike={()=>props.onDislike(val)}
                onFilter={()=>props.onFilter(val)}
                />} 
            )
        }
    </ul>
  )
}
