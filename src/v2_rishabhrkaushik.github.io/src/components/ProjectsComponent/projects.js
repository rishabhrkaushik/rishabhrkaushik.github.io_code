import React, {  Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./projects.css";

class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> {this.props.projectTitle} </ModalHeader>
          <ModalBody>
            {this.props.projectDesc}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class Card extends Component {
    render(){
      return (
        <article>
          <div className="project">
            <div className="cover">
              <div className="projectTitle">
                <h3> {this.props.projectTitle} </h3>
              </div>
              <div className="tags">
                <span className="tag"> Tag 1 </span>
                <span className="tag"> Tag 2 </span>
                <span className="tag"> Tag 3 </span>

                <span className="tag"> Tag 1 </span>
                <span className="tag"> Tag 2 </span>
              </div>
            </div>
            <div className="overlay">
              <div className="heading">
                <h4> Project </h4>
                <hr />
              </div>
              <div className="projectSummary">
                <h6> {this.props.projectSummary} </h6>
              </div>
              <ProjectModal buttonLabel="Show More" projectTitle={this.props.projectTitle} projectDesc={this.props.projectDesc}/>
            </div>
          </div>
        </article>
      );
    }
}

class Projects extends Component {
  render(){
    return (
      <div id="projectsDiv">
        <h1> Projects </h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Card projectTitle='Project 1' projectSummary='This is Summary 1' projectDesc="This is the description of project 1"/>
            </div>
            <div className="col-md-3">
              <Card projectTitle='Project 2' projectSummary='This is Summary 2'/>
            </div>
            <div className="col-md-3">
              <Card projectTitle='Project 3' projectSummary='This is Summary 3. This is Summary 3. This is Summary 3. This is Summary 3. This is Summary 3. This is Summary 3. This is Summary 3. This is Summary 3. This is Summary 3. '/>
            </div>
            <div className="col-md-3">
              <Card projectTitle='Project 4' projectSummary='This is Summary 4'/>
            </div>
            <div className="col-md-3">
              <Card projectTitle='Project 5' projectSummary='This is Summary 5'/>
            </div>
            <div className="col-md-3">
              <Card projectTitle='Project 6' projectSummary='This is Summary 6'/>
            </div>
            <div className="col-md-3">
              <Card projectTitle='Project 7' projectSummary='This is Summary 7'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
