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
                 onChange={handleChange} name="option" />
               <label for="a">A</label>
  
              <input type="radio" value="b" id="b"
                onChange={handleChange} name="option"/>
              <label for="b">B</label>

              <input type="radio" value="c" id="c"
                onChange={handleChange} name="option" className='c'/>
              <label for="c">C</label>

              <input type="radio" value="d" id="d"
                onChange={handleChange} name="option" className='d'/>
              <label for="d">D</label>
           </form>
  
           <p>Your option is -- {option}</p>
        </div>
      );
}

export default RadioButton;

