import React, {Component} from 'react';

import './Contact.css';

class Contact extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="contact-background">
        <div className="columns">
          <div className="column">
            <div>
              rishabhrkaushik@gmail.com
            </div>
          </div>
          <div className="column">
            <div>
              +91-8055878067
            </div>
          </div>
          <div className="column">
            <div>
              Bangalore, India
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
