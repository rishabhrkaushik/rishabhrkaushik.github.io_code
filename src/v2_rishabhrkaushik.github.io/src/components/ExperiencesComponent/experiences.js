import React, {  Component } from 'react';
import "./experiences.css";

class Card extends Component {
  render (){
    return (
      <article>
        <div class="inner">
          <span class="date">
            <span class="day">30<sup>th</sup></span>
            <span class="month">Jan</span>
            <span class="year">2014</span>
          </span>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
      </article>
    );
  }
}
class Experiences extends Component {
  render(){
    return (
      <div id="experiencesDiv">
        <h1> Experiences </h1>
        <section id="timeline">
          <Card title="Research and Development Intern" content="Did everything"/>
          <Card title="Research and Development Intern" content="Did everything"/>
        </section>
      </div>
    );
  }
}

export default Experiences;
