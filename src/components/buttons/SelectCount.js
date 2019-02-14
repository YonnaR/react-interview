import React from 'react';

export default function SelectCount(props){
  return (
    <div>
        <p>
            Élément à afficher: <br/>
            <select
            onClick={e =>
            props.onCountSelect(e.target.options[e.target.selectedIndex].value)
            }
            >
                <option value="10">10</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
        </select>
        </p>
        
    </div>
  )
}
