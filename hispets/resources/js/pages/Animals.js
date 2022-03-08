import React from 'react'
import Animal from '../componnts/Animal';

function Animals(props) {
    
    const an=props.myAnimals.map((m)=><Animal fils={m}></Animal>
    )
    return (
        <div style={styl}>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
        {an}
          {/* <Animal fils={props.myAnimals[0]}></Animal>
          <Animal fils={props.myAnimals[1]}></Animal>
          <Animal fils={props.myAnimals[2]}></Animal> */}
        </div>
        </div>
    )
}
let styl={
  backgroundColor :'#f4f4f4'
}

export default Animals
//  const an=props.myAnimals.map((m)=><Animal></Animal>
   
//);
//return
//{an}