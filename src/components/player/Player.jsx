import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super();
    this.state = {
      url: null
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ url: props.item });
  }

  render() {
    return (
      <div className="player embed-responsive">
        <h4 className="player__text-holder">Choose song!</h4>
        <iframe
          className="embed-responsive-item"
          title="Player"
          width="640"
          height="360"
          disablekb="1"
          src={this.state.url}
          frameBorder="0"
        />
      </div>
    );
  }
}

export default Player;
