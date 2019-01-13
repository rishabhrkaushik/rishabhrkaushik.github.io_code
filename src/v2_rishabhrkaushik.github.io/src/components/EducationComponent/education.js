import React,{ Component } from 'react';
import { Card, CardText, CardBody, CardHeader,CardTitle, CardSubtitle, CardDeck} from 'reactstrap';
import "./education.css";

import education from '../../data/education.json';


class Education extends Component {
  render(){
    return(
      <div id="educationDiv">
        <div className="title">
          <h1> Certifications </h1>
          <hr />
        </div>
        {/* <CardDeck>
          <Card>
            <CardHeader> Formal Education </CardHeader>
          </Card>
          <Card>
            <CardHeader> Certification </CardHeader>
          </Card>
        </CardDeck> */}
        <CardDeck>
          <Card>
            <CardHeader> Electronics </CardHeader>
            <CardBody className="low-padding">
              {
                education.Electronics.map((electronicsCert) =>
                  <Card>
                    <CardHeader>
                      <CardTitle> {electronicsCert.name} </CardTitle>
                      <CardSubtitle> {electronicsCert.desc} </CardSubtitle>
                    </CardHeader>
                    <CardBody> <a target="_blank" href={electronicsCert.link}> View Certificate </a> </CardBody>
                  </Card>
                )
              }
            </CardBody>
          </Card>
          <Card>
            <CardHeader> Computer Science </CardHeader>
            <CardBody className="low-padding">
              {
                education["Computer Science"].map((csCert) =>
                  <Card>
                    <CardHeader>
                      <CardTitle> {csCert.name} </CardTitle>
                      <CardSubtitle> {csCert.desc} </CardSubtitle>
                    </CardHeader>
                    <CardBody> <a target="_blank" href={csCert.link}> View Certificate </a> </CardBody>
                  </Card>
                )
              }
            </CardBody>
          </Card>
          <Card>
            <CardHeader> Soft Skills and Humanities </CardHeader>
            <CardBody className="low-padding">
              {
                education["Soft Skills and Humanities"].map((ssCert) =>
                  <Card>
                    <CardHeader>
                      <CardTitle> {ssCert.name} </CardTitle>
                      <CardSubtitle> {ssCert.desc} </CardSubtitle>
                    </CardHeader>
                    <CardBody> <a target="_blank" href={ssCert.link}> View Certificate </a> </CardBody>
                  </Card>
                )
              }
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Education;
