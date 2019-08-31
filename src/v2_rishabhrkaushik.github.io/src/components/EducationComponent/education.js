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
        <div className="certifications_content">
          <CardDeck>
            <Card>
              <CardHeader> Electronics </CardHeader>
              <CardBody className="low-padding">
                {
                  education.Electronics.map((electronicsCert, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle> {electronicsCert.name} </CardTitle>
                        <CardSubtitle> {electronicsCert.desc} </CardSubtitle>
                      </CardHeader>
                      <CardBody> <a target="_blank" href={electronicsCert.link}> View Certificate </a> </CardBody>
                    </Card>
                  ))
                }
              </CardBody>
            </Card>
            <Card>
              <CardHeader> Computer Science </CardHeader>
              <CardBody className="low-padding">
                {
                  education["Computer Science"].map((csCert, i) =>
                    <Card key={i}>
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
                  education["Soft Skills and Humanities"].map((ssCert, i) =>
                    <Card key={i}>
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
      </div>
    );
  }
}

export default Education;
