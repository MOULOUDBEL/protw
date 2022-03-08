// import React from 'react'
import React from "react";

class Animal extends React.Component{
  state={
    likes : false

  }
  changebutton = () =>{
    this.setState(
      {likes : !this.state.likes}
    )
  }

  render(){const dist=this.props.fils
    return(
      <div className="animal-list">
       <div className="col">
        <div className="card" style={{width: "18rem"}}>
        <img src={dist.image} className="card-img-top" alt={dist.nom}/>
        <div className="card-body">
        <h5 className="card-nom">Nom : {dist.nom}</h5>
         <p className="card-desc">Description : {dist.descr}</p>
         <p className="card-age">Age : {dist.age} ans</p>
         <p className="card-esc">Espece : {dist.espece}</p>
         <a href="#" className={this.state.likes ? "btn btn-danger" :"btn btn-primary"} onClick={()=>this.changebutton()}>
         {this.state.likes ? "j'aime": "je n'aime pas "}
         </a>

        </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Animal;








// function Animal(props) {
//   const  m=props.animal;

//     //   const likes=m.liked
//       const [likes, setLikes] = useState(m.liked.false);


//       function handelLike(){
//         setLikes(!likes);

//     }
//     return (
//         <div>
//              <div className='animal-list'>
//              <div class="col">




//         <div className="card" style={{width: "18rem"}}>
//   <img src={m.image} className="card-img-top" alt={m.nom}/>
//   <div className="card-body">
//     <h5 className="card-nom">Nom : {m.nom}</h5>
//     <p className="card-desc">Description : {m.descr}</p>
//     <p className="card-age">Age : {m.age} ans</p>
//     <p className="card-esc">Espece : {m.espece}</p>
//     <a href="#" className="btn btn-primary" onClick={handelLike}>
//         {likes ? "j'aime": "je deteste"}
//     </a>
//   </div>
// </div>



//     </div>

//         </div>
//         </div>
//     )
// }

// export default Animal

