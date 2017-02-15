import React from 'react';
import Preview from './Preview';

export default class ListItem extends React.Component {
  render() {
    return (
      <li onClick={e => {
        e.preventDefault();
        this.props.onClick();
      }}>
        <Preview slide={this.props.slide} />
      </li>
    );
  }
}

ListItem.propTypes = {
  slide: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isOptional,
    content: React.PropTypes.string.isOptional,
  }).isRequired,
  onClick: React.PropTypes.func.isRequired
};