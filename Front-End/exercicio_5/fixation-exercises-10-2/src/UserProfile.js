// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div className='usuarios'>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
        <p> Nome: {this.props.user.name} </p>
        <p> E-mail: {this.props.user.email} </p>
      </div>
    );
  }
}

export default UserProfile;