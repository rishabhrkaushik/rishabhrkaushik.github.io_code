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
              <a href="mailto:rishabhrkaushik@gmail.com" target="_blank" rel="noopener noreferrer">
                rishabhrkaushik@gmail.com
              </a>
            </div>
          </div>
          <div className="column">
            <div>
              +1 469-743-1906
            </div>
            <div>
              +91 805-587-8067
            </div>
          </div>
          <div className="column">
            <div>
              Richardson, Texas, USA
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
