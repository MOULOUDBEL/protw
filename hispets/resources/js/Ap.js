
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './Navigation';
import Home from './pages/Home';

import Birds from './pages/Birds';
import Food from './pages/Food';
import Animals from './pages/Animals';

function Ap() {
  var tab=[
    {
    "nom" : "Tom",
    "espece" : "Chat",
    "age" : 2,
      "descr" : "un chat hyper gentil", 
      "image" :"/Chats-mignons.jpg",
      "liked":"false"
      },
{
"nom" : "Greta",
"espece" : "chien",
"age" : 5,
"descr" :"une chienne adorable pour les enfants",
"image" :"/chien.jpg",
"liked":"false"
},
{
"nom" : "Brandon",
"espece" : "chien",
"age" : 10,
"descr" :"Ce bulldog est fait pour les grands amateurs",
"image" : "/Brandon.jpg",
"liked":"false"
}
  ]

  return (
    <div className="App">
     
      
      <BrowserRouter>
      <Navigation></Navigation>  
    
    <Routes>
    

    <Route path='/Home' element={<Home/>} />
    <Route path='/animals' element={<Animals myAnimals={tab} name='jj'/>} />
    <Route
              path='/Birds'
              element={<Birds />}
          />
          <Route path='/Food' element={<Food/>} />


    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default Ap;

