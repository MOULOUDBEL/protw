import React from 'react'
import { NavLink as Link  } from "react-router-dom"

function Navigation() {
    const menu=['Home', 'animals', 'Birds', 'Food'];
    const nav = menu.map((menu)=> (<Link className="nav-link active" aria-current="page" to={"/"+menu}>
    <li key={menu} style={{marginLeft : 10,  width: '25%', textAlign: 'center',color: 'white', padding:'15px 20px' }}>{menu}</li>
    </Link>));


    return (
        <div className='menu'>



          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      {nav}


      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navigation
