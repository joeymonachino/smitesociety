import { render } from '@testing-library/react';
import React from 'react';
import { godArray } from './arrays.js';
import './gods.css';


const godList = godArray.map((godsList) => 
        <div className='SingleGod'>
            <br></br>
            <div><img className='SingleGodImage' src={process.env.PUBLIC_URL + '/' + godsList.image} /></div>
            <div className='SingleGodName'><strong>{godsList.name}</strong></div>
        </div>
    );

    
const Gods = props => {
    return (
      <div className='GodDisplay'>
        {godList}
      </div>
    );
  }
  
export default Gods;