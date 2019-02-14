import React from 'react'

export default (props) => {
  return (
    <p>
      Catégorie : <br/>
      <select
        onClick={e =>
        props.onFilter(
            e.target.selectedIndex === 0
            ? null
            : e.target.options[e.target.selectedIndex].value
        )
        }
      >
        <option>toute</option>
        {props.categories.map((category, i) => (
        <option key={i} value={category}>
            {category}
        </option>
        ))}
      </select>
      </p>
    
  )
}
