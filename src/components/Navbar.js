import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.abouttext}</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <div className='d-flex'>
                <div className='bg-primary rounded mx-2' onClick={()=>{props.toggle('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                <div className='bg-danger rounded mx-2' onClick={()=>{props.toggle('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                <div className='bg-success rounded mx-2' onClick={()=>{props.toggle('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                <div className='bg-warning rounded mx-2' onClick={()=>{props.toggle('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-3`}>
              <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light'?'dark':'light'} Mode`}</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

// applying checkpoints by providing datatypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired
}

// providing default parameters
Navbar.defaultProps = {
  title: 'put title here',
  abouttext: 'put about text here'
}
