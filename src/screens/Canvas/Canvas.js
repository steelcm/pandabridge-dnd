import React, {Component} from 'react';
import Card from '../../components/Card';
import { templates } from '../../static/templates';


const components = [1, 2, 3, 4, 5];

class Canvas extends Component {
  render() {
    var renderedComponents = templates.map(function() {
      return (
        <Card />
      );
    });
    return (
      <div className="Canvas">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 bg-light">
              { renderedComponents }
            </div>
            <div className="col-md-6 bg-secondary">
              <p>preview</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;