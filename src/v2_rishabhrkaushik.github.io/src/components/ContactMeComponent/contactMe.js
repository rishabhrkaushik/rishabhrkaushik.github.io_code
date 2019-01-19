import React,{ Component } from 'react';
import "./contactMe.css";

import contactInfo from '../../data/contactInfo.json';

class ContactMe extends Component {
  render(){
    return (
      <div id="contactDiv">
        {/* <h1> Contact Me </h1> */}
        {/* <div id = "social">
          <div className="row">
            <div className="col-lg-4">
            <ul className="networks">
            <li className="facebook extremenet">
            <a target="_blank" href="https://www.facebook.com/kaustubhhiware">
            <i className="fab fa-facebook"></i>
            </a>
            </li>
            <li className="github">
            <a target="_blank" href="https://github.com/kaustubhhiware">
            <i className="fab fa-github"></i>
            </a>
            </li>
            <li className="linkedin">
            <a target="_blank" href="https://www.linkedin.com/in/kaustubhhiware">
            <i className="fab fa-linkedin"></i>
            </a>
            </li>
            <br />
            <li className="google midnet">
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hiwarekaustubh@gmail.com&amp;" target="_blank">
            <i className="fab fa-google"></i>
            </a>
            </li>
            <li className="reddit">
            <a target="_blank" href="https://www.reddit.com/">
            <i className="fab fa-reddit"></i>
            </a>
            </li>
            <li className="twitter">
            <a href="https://twitter.com/kaustubhhiware" target="_blank">
            <i className="fab fa-twitter"></i>
            </a>
            </li>
            <li className="instagram">
            <a target="_blank" href="https://www.instagram.com/kaustubhhiware/">
            <i className="fab fa-instagram"></i>
            </a>
            </li>
            <br />
            <li className="quora extremenet">
            <a target="_blank" href="https://www.quora.com/profile/Kaustubh-Hiware">
            <i className="fab fa-quora"></i>
            </a>
            </li>
            <li className="medium">
            <a target="_blank" href="https://medium.com/@kaustubhhiware">
            <i className="fab fa-medium"></i>
            </a>
            </li>
            <li className="stumbleupon">
            <a target="_blank" href="https://www.stumbleupon.com/stumbler/kaustubhhiware">
            <i className="fab fa-stumbleupon"></i>
            </a>
            </li>
            </ul>
            </div>
            <div className="col-lg-8">
              Contact Form
            </div>
          </div>
        </div> */}
        <div id="bottom_bar">
          <div className="row">
            <div className="col-lg-3">
              <div className="contactHeading">
                e-mail
              </div>
              <div className="contactContent">
                rishabhrkaushik@gmail.com
              </div>
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
