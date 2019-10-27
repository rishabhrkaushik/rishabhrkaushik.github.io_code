import React, {Component} from 'react';

import './Skills.css';

import skills from './../../data/skills.js';

class Skills extends Component {

  constructor(props){
    super(props);
    this.state = {
      columnCount: 5
    }
    if (window.innerWidth < 768) {
      this.state.columnCount = 3
    }
    else {
      this.state.columnCount = 5
    }
  }

  createTable(){
    var rows = [];

    for(var rowIndex = 0; rowIndex < skills.length/this.state.columnCount; rowIndex++){
      var column = [];

      for(var columnIndex = 0; columnIndex < this.state.columnCount; columnIndex++){
        if(((rowIndex * this.state.columnCount) + columnIndex) < skills.length){
          column.push(
            <td className="skill-cell" key={columnIndex}>
              <figure>
                <img src={skills[(rowIndex * this.state.columnCount )+ columnIndex]["src"]} alt={skills[(rowIndex * this.state.columnCount )+ columnIndex]["skill"]} width="200px"/>
              </figure>
            </td>
          );
        }
      }
      rows.push(<tr key={rowIndex}>{column}</tr>);
    }
    return <tbody>{rows}</tbody>
  }

  render() {
    return (
      <div className="skills-background">
        <div className="title">
          Skills
        </div>
        <div className="table-container">
          <table align="center" className="table">
            {this.createTable()}
          </table>
        </div>
      </div>
    );
  }
}

export default Skills;
