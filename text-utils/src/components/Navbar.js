import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar light navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
          {/* Dropdown button */}
          
          <div className="dropdown mx-3">
              <button className={`btn btn-light dropdown-toggle text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                More themes
              </button> 
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="_">
              <div className={`form-check form-switch mx-1 text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" onClick={props.toggleRedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red mode</label>
              </div>
              </a></li>
            {/* new */}
                <li><a className="dropdown-item" href="_">
                <div className={`form-check form-switch mx-1 text-${props.mode==='light'?'dark':'light'}`}>
                      <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
              </div>   
                  </a></li>
            {/* new End */}
                {/* <li><a className="dropdown-item mx-4" href="_">Another action</a></li>
                <li><a className="dropdown-item" href="_">Something else here</a></li> */}
              </ul>
            </div>
          {/* Dropdown End */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Default Title",
    aboutText : "Default About"
}