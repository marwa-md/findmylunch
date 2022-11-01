import React from 'react'

const Meal = ({meal}) => {

    const {label , image , url} = meal.recipe ;
  return (
    <div className='meal'>
<h3>{label}</h3>
<img src ={image}></img>
<a href={url} target="_blank"><h3>View Recipe</h3></a>
    </div>
  )
}

export default Meal
