import React, { Component } from 'react';
import Player from '../player/Player';
import './Songlist.css';

class Songlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: [],
      item: null
    };
    this.selectVideo = this.selectVideo.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ songList: props.songs });
  }

  selectVideo(vidId) {
    let vidUrl = `https://www.youtube.com/embed/${vidId}?autoplay=1`;
    this.setState({ item: vidUrl });
  }

  render() {
    return (
      <div>
        <Player item={this.state.item} />
        <div className="list__custom">
          <ul className="list-group">
            {this.state.songList.map(item => {
              return (
                <li
                  key={item.id}
                  className="list-group-item list-group-item-action"
                  onClick={() =>
                    this.selectVideo(item.snippet.resourceId.videoId)
                  }
                >
                  <div>
                    <img
                      className="list__custom--img"
                      src={item.snippet.thumbnails.default.url}
                      alt={item.description}
                      value={item.snippet.resourceId.videoId}
                    />
                    <div className="list__custom--text">
                      {item.snippet.title}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Songlist;
