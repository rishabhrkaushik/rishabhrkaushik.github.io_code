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
          {/* {
            for(i = 0; i < 4; i++){
              <ProjectCard projectTitle={projects[i].title} projectSubtitle={project[i].subTitle} tags={project[i].tags} projectSummary={projects[i].summary} projectDesc={projects[i].projectDesc}/>
            }
          }

          {
            for(i = 0; i < 4; i++){
              <ProjectCard projectTitle={projects[i].title} projectSubtitle={project[i].subTitle} tags={project[i].tags} projectSummary={projects[i].summary} projectDesc={projects[i].projectDesc}/>
            }
          } */}

            {
              this.makeCardDeck(projects)
            }
          {/* <ProjectCard projectTitle="Project 1" tags="Tag 1, Tag 2, Tag 3, Tag 4" projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
          <ProjectCard projectTitle="Project 2" tags="Tag 1, Tag 2, Tag 3, Tag 4" projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
          <ProjectCard projectTitle="Project 3" tags="Tag 1, Tag 2, Tag 3, Tag 4" projectSummary="Lorem tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
          <ProjectCard projectTitle="Project 4" tags="Tag 1, Tag 2, Tag 3, Tag 4" projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
        </CardDeck>
        <CardDeck>
          <ProjectCard projectTitle="Project 5" tags="Tag 1, Tag 2, Tag 3, Tag 4" projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
          <ProjectCard projectTitle="Project 6" tags="Tag 1, Tag 2, Tag 3, Tag 4" projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
          <ProjectCard projectTitle="Project 7" tags="Tag 1, Tag 2, Tag 3, Tag 4, Tag 5, Tag 6,Tag 7, Tag 8, Tag 9, Tag 10" projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tincidunt felis, ut facilisis mi. Integer tristique augue eget eros pharetra mattis. Quisque rutrum scelerisque tellus in condimentum. Sed lacinia ultricies magna, vitae tincidunt magna. Sed elementum ex vel ultrices viverra. Fusce sit amet eleifend metus. Nullam fermentum dapibus ligula finibus semper. Donec vel purus vulputate, faucibus sem eu, eleifend diam. Curabitur sed rutrum lectus. Vivamus mollis mi sit amet erat rutrum, vestibulum ornare nibh hendrerit. "/>
          {/* <ProjectCard collapse={true} /> */}
        </div>
      </div>
    );
  }
}

export default Projects;
