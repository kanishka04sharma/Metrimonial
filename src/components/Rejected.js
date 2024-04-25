import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import menu from '../assets/menu.png';

class Rejected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rejectedlist: [],
      profileId: props.match.params.profileIdParam
    };
  }

  componentDidMount() {
    const { profileId } = this.state;
    this.getData(profileId)
      .then(response => {
        this.setState({ rejectedlist: response.data });
      })
      .catch(error => {
        console.error('Error fetching rejected profiles:', error);
      });
  }

  getData = profileId => {
    return axios.get(`http://10.117.189.210:9090/app/getRejectedProfile/${profileId}`);
  };

  render() {
    const { profileId } = this.state;
    return (
      <div>
        <Nav profileId={profileId} />
        <table className="table list">
          <thead>
            <tr>
              <td>rejectedProfileId</td>
              <td>rejectedProfileName</td>
            </tr>
          </thead>
          <tbody>
            {this.state.rejectedlist.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.rejectedProfileId}</td>
                  <td>{item.rejectedProfileName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Rejected;
