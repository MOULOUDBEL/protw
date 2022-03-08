import React from 'react'
import Animal from '../componnts/Animal';


// function Animals(props) {

//     const an= props.myAnimals.map((m)=> <Animal fils={m} key={m.nom}></Animal>)
//     return (
//         <div>
//         <div className='row row-cols-1 row-cols-md-3 g-4'>
//         {an}

//         </div>
//         </div>
//     )
// }


// export default Animals
// //  const an=props.myAnimals.map((m)=><Animal></Animal>

// //);
// //return
// //{an}
class Animals extends React.Component{

    render(){
        const an = this.props.myAnimals.map((m)=> <Animal fils={m} key={m.nom}></Animal>)
        return(
            <div>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
                  {an}

                   </div>
             </div>
        )




}}
export default Animals;
