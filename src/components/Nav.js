import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';

class Nav extends Component {
  render() {
    const { profileId } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={menu} width="40px" height="40px" alt="Menu" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <b>
                <i>
                  <button onClick={() => this.props.history.push('/listof/' + profileId)} className="btn btn-link">
                    Profiles List
                  </button>
                </i>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <i>
                  <button onClick={() => this.props.history.push('/intrested/' + profileId)} className="btn btn-link">
                    Intrested profiles
                  </button>
                </i>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <i>
                  <button onClick={() => this.props.history.push('/accepted/' + profileId)} className="btn btn-link">
                    Accepted profiles
                  </button>
                </i>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <i>
                  <button onClick={() => this.props.history.push('/rejected/' + profileId)} className="btn btn-link">
                    Rejected profiles
                  </button>
                </i>
              </b>
            </li>
            <button className="btn btn-link">
              <Link to="/dashboard">Logout</Link>
            </button>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
