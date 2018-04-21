import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Songlist from '../songlist/Songlist';

const KEY = 'YOUR_YOUTUBE_API_KEY';
const PLID = 'YOUR_PLAYLIST_ID';
const VIDS = 50;
const API = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${VIDS}&playlistId=${PLID}&key=${KEY}`;

class ApiData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    fetch(API)
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Songlist songs={this.state.data.items} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApiData;
