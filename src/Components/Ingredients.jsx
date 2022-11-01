import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Error from './Error';
import Meal from './Meal';

const Ingredients = () => {

  const [item , setItem] = useState('');
  const [meals , setMeals] = useState([]);
  const [error , setError] = useState(false);

  

const handleChange = (e)=>{

    setItem (e.target.value);

  }

  const getMeals= async ()=>{

    if (item !== ''){
      
      const response = await Axios.get(`https://api.edamam.com/search?q=${item}&app_id=3af8286a&app_key=70f10f3d431078a27fdf6b653085fdf7`);
      if (!response.data.more)
      {

        setError(true)
        
      }
      
      console.log(response);
      setMeals(response.data.hits);
      setItem('');
      setError('false')
      
    }
    else {
      setError(true);
    }
  };

  const searchMeal = (e) =>{
    e.preventDefault();
    getMeals ();
  }


  return (
    <div class='container ingredients'> 

      <form onSubmit={searchMeal}> 
      {error === true && <Error />}
      <input type ="text" placeholder='Type ingredient here ...' value ={item} onChange={handleChange}></input>
      <br></br>
          <input type='submit' value="Find my lunch now!"></input>
< div className='recipes'>
{ meals !== [] && meals.map (meal => <Meal meal={meal}/> )}

</div>
      
      </form >
    </div>
  )
}

export default Ingredients
