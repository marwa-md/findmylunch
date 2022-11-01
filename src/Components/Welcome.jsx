import React from 'react'
import {useState} from 'react';
import Ingredients from'./Ingredients';
import Footer from './Footer';



const Welcome = () => {

    const [active , setActive] = useState("welcome");

  return (
    <div>
    
      <h1>Welcome to Find My Lunch!</h1>
      <h2>Find great recipes from components you already have in your kitchen</h2>

      { active === "welcome" && 
      <div class='container welcome'>
      <div class="d-grid gap-2 col-2 mx-auto">
      <button type="button" class="btn btn-light btn-lg" onClick={() => setActive("hi")}>Get Started</button>
      </div>
      </div>
}
     {
    active === "hi" && <Ingredients />


      }
   <Footer />
 
    </div>
    
  )
}

export default Welcome
