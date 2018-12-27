import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Card extends Component {
  render() {
    return (
      <div className="card bg-light mb-3 rounded-0">
        <div className="card-body">
          <span className="badge badge-secondary position-absolute rounded-0" style={{top: 0, left: 0 }}>{this.props.title}</span>
          <div className="card-scaled ">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired
};

export default Card;