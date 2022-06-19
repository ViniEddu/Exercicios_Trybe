// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img className='photo-avatar' src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;