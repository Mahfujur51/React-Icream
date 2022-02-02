import React from 'react';
import classes from './IceCream.module.css'
import Scoop from './Scoop/Scoop';

const IceCream = ({items}) => {
  const flavours = Object.keys(items)

  return ( <div>
    <div className={classes.icecream}>
      <p className={classes.cone}></p>
      { flavours.map((flovour)=>(
        <Scoop key={flovour} scoop={flovour}/>
        ))
      }
      <div className={classes.cherry}></div>
    </div>
  </div>);
};

export default IceCream;
