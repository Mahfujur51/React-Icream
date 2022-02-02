import React from 'react';
import Item from './Item/Item';

const items = ({items}) => {
  const flovours = Object.keys(items)
  console.log(flovours);
  return(<div>
         <ul>
           {
             flovours.map((flovour)=>(

              <Item name={flovour} key={flovour}/>
             ))}
           
         </ul>
  </div>);
};

export default items;
