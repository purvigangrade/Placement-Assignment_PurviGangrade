import React, { useContext } from 'react';
import { themeContext } from '../App';

const Posts = () => {
    const {theme, handleOnclick }= useContext(themeContext);
  return (
    <div>
    <h4>My Post with {theme}</h4>
    <button className={`btn ${theme === 'Dark'? 'btn-light': 'btn-dark'}`} onClick={handleOnclick}>
    {theme === 'Dark'? 'Light' : 'Dark'}
    </button>
    </div>
  )
}

export default Posts