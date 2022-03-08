
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './Navigation';
import Home from './pages/Home';

import Birds from './pages/Birds';
import Food from './pages/Food';
import Animals from './pages/Animals';
import React from 'react';

class Ap extends React.Component  {
  state = {

    chevwis: []
  }

  componentDidMount(){
      axios.get('http://127.0.0.1:8000/animals')
      .then(res => {
          const chevwis = res.data;
          this.setState({chevwis});
      })
  }

render(){
  return (
    <div className="App">


      <BrowserRouter>
      <Navigation></Navigation>

    <Routes>


    <Route path='/Home' element={<Home/>} />
    <Route path='/animals' element={<Animals myAnimals={this.state.chevwis} />} />
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
}

export default Ap;

