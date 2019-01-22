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
                rishabhrkaushik@gmail.com
              </div>
              <hr />
            </div>
            <div className="col-lg-3">
              <div className="contactHeading">
                Location
              </div>
              <div className="contactContent">
                Bangalore, India
              </div>
            </div>
            <div className="col-lg-3">
              <div className="contactHeading">
                Phone
              </div>
              <div className="contactContent">
                +918055878067
              </div>
            </div>
            <div className="col-lg-3">
              <div className="contactHeading">
                Web
              </div>
              <div className="contactContent">
                https://rishabhrkaushik.github.io
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
