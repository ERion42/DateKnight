import React, { useState } from 'react';
import './Radio.css';

const RadioButton = () => {
    const [option,setOption]=useState('');

    const handleChange=(e)=>{
        setOption( e.target.value);
     }

     return (
        <div>
           <form className='grid-container'>
               <input type="radio" value="a" id="a"
                 onChange={handleChange} name="option" className='a' />
               <label htmlFor="a" className='a'>A</label>
  
              <input type="radio" value="b" id="b"
                onChange={handleChange} name="option" className='b'/>
              <label htmlFor="b" className='b'>B</label>

              <input type="radio" value="c" id="c"
                onChange={handleChange} name="option" className='c'/>
              <label htmlFor="c" className='c'>C</label>

              <input type="radio" value="d" id="d"
                onChange={handleChange} name="option" className='d'/>
              <label htmlFor="d" className='d'>D</label>
           </form>
  
           <p>Your option is -- {option}</p>
        </div>
      );
}

export default RadioButton;

