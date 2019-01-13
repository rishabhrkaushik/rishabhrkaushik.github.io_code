import React, {  Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Card, CardText, CardBody, CardHeader, CardFooter, CardDeck} from 'reactstrap';
import "./projects.css";
import projects from '../../data/projects.json';

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
        <i className="showMore" onClick={this.toggle}> Show More </i>
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

class ProjectCard extends Component {
  createTagString(tags){
    var tagsString = "";
    tags.map(tag =>
      tagsString = tagsString + ", " + tag)
    return tagsString.substr(2)
  }

  render(){
    return (
      <Card>
        <CardHeader>{this.props.projectTitle}</CardHeader>
        <CardBody>
          <CardText>{this.props.projectSummary}</CardText>
          <ProjectModal projectTitle={this.props.projectTitle} projectDesc={this.props.projectDesc} buttonLabel="Show More"/>
        </CardBody>
        <CardFooter>{this.createTagString(this.props.tags)}</CardFooter>
      </Card>
    );
  }
}

class Projects extends Component {

  makeCardDeck(projects){
    var json_current_index = 0
    var card_decks= []
    while(json_current_index < projects.length)
    {
      var project_cards = [];
      for(var i = 0; i < 4; i++){
        if(json_current_index + i < projects.length){
          var project = projects[json_current_index+i];
          // project_cards.push(<ProjectCard tags={project.tags}/>)
          project_cards.push(<ProjectCard projectTitle={project.title} projectSubtitle={project.subTitle} tags={project.tags} projectSummary={project.summary} projectDesc={project.projectDesc}/>)
        }
        else{
          project_cards.push(<ProjectCard tags={[]} />)
        }
      }
      card_decks.push(<CardDeck>{project_cards}</CardDeck>)
      json_current_index = json_current_index + 4;
    }
    return <div>{card_decks}</div>
  }
  render(){
    return (
      <div id="projectsDiv">
        <div className="heading">
          <h1>
            Project
          </h1>
        </div>
        <div className="projectsList">
          {
            this.makeCardDeck(projects)
          }
        </div>
      </div>
    );
  }
}

export default Projects;
