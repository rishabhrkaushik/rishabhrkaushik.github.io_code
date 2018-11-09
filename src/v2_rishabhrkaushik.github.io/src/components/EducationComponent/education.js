import React,{ Component } from 'react';
import "./education.css";


class Education extends Component {
  render(){
    return(
      <div id="educationDiv">
        <div className="title">
          <h1> Education </h1>
          <hr />
        </div>
        <div className="container-fluid">
          <div className="firstrow row">
            <div className="col-md-6">
              <h3> Formal Education </h3>
              <div className="formalEducationItem">
                Bachelor of Electronics Engineering,
                Shri Ramdeobaba College of Engineering and Management
              </div>
              <div className="formalEducationItem">
                Higher Secondary Education,
                Maharashtra State Board
              </div>
              <div className="formalEducationItem">
                Secondary Education,
                Maharashtra State Board
              </div>
            </div>
            <div className="col-md-6">
              <h3> Certification </h3>
              <div className="formalEducationItem">
                Bachelor of Electronics Engineering,
                Shri Ramdeobaba College of Engineering and Management
              </div>
              <div className="formalEducationItem">
                Higher Secondary Education,
                Maharashtra State Board
              </div>
              <div className="formalEducationItem">
                Secondary Education,
                Maharashtra State Board
              </div>
            </div>
          </div>
          <div className="secondrow row">
            <div className="col-md-4">
              <h3> Electronics </h3>
            </div>
            <div className="col-md-4">
              <h3> Computer Science </h3>
            </div>
            <div className="col-md-4">
              <h3> Humanities </h3>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Education;
