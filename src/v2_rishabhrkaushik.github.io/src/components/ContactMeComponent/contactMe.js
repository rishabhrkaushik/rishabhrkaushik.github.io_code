import React,{ Component } from 'react';
import "./contactMe.css";

import contactInfo from '../../data/contactInfo.json';

class ContactMe extends Component {
  render(){
    return (
      <div id="contactDiv">
        <div id="bottom_bar">
          <div className="row">
            <div className="col-lg-3">
              <div className="contactHeading">
                e-mail
              </div>
              <div className="contactContent">
                {contactInfo.email}
              </div>
              <hr />
            </div>
            <div className="col-lg-3">
              <div className="contactHeading">
                Location
              </div>
              <div className="contactContent">
                {contactInfo.location}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="contactHeading">
                Phone
              </div>
              <div className="contactContent">
                {contactInfo.mobile}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="contactHeading">
                Web
              </div>
              <div className="contactContent">
                {contactInfo.website}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
