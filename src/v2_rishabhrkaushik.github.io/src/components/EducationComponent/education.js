import React,{ Component } from 'react';
import { Card, CardText, CardBody, CardHeader, CardFooter, CardDeck} from 'reactstrap';
import "./education.css";


class Education extends Component {
  render(){
    return(
      <div id="educationDiv">
        <div className="title">
          <h1> Education </h1>
          <hr />
        </div>
        <CardDeck>
          <Card>
            <CardHeader> Formal Education </CardHeader>
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
          </Card>
          <Card>
            <CardHeader> Certification </CardHeader>
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
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <CardHeader> Electronics </CardHeader>
          </Card>
          <Card>
            <CardHeader> Computer Science </CardHeader>
          </Card>
          <Card>
            <CardHeader> Humanities </CardHeader>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Education;
