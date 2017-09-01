import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(../images/header2.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  {/* Add a NavLink set to the home page. Set the activeStyle to a color of yellow */}
                  <NavLink exact to='/' activeClassName='selected' className='nav-link' activeStyle={{ color: "yellow" }}>Explorer</NavLink>
                </li>
                <li>
                  {/* Add a NavLink set to characters. Include activeClassName */}
                  <NavLink to='/people' activeClassName='selected' className='nav-link'>Characters</NavLink>
                </li>
                <li>
                  {/* Add a NavLink set to starships. Include activeClassName */}
                  <NavLink to='/starships' activeClassName='selected' className='nav-link'>Starships</NavLink>
                </li>
                <li>
                  {/* Add a NavLink set to films. Include activeClassName */}
                  <NavLink to='/films' activeClassName='selected' className='nav-link'>Films</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
          </div>
        </nav>
        {/*
          PASS IN CHILD COMPONENTS <<<<<<<<<<<<<<<<<<<
          */}
          {this.props.children}
        <footer className="col-lg-11">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}

// callApi(path) {
//
//     let url = `https://swapi.co/api/${path}/`;
//     // Fetch data from API
//     fetch(url).then((response) => {
//       return response.json();
//     }).then((data) => {
//       this.setState({ [path]: data.results})
//     });
//
// }
