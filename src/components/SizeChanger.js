import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" onChange={ (e) => props.update( parseInt(e.target.value, 10) ) } disabled={ props.allowEdit === "false" }>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}