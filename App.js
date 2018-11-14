
import React, { Component } from "react";

import Header from "./Header";
import BigScreenVideo from "./BigScreenVideo";
import VideoList from "./VideoList";
import CommentZone from "./CommentZone";
import "../css/App.css";

class App extends Component {
  state = {
    videoData: null,
    commentData: null
  };

  componentDidMount() {
    this.getVideoData();
    this.getCommentData();
  }

  getVideoData = () => {
    fetch(
      "https://project-2-api.herokuapp.com/videos?api_key=34d52a2b-a0ee-4c4a-8399-d10e47c13431"
    )
      .then(serverAnswered => serverAnswered.json())
      .then(vData => {
        console.log(vData);
        const videoData = vData;
        this.setState({ videoData });
      })
      .catch(error => console.log(error));
  };

  getCommentData = () => {
    fetch(
      "https://project-2-api.herokuapp.com/video/`{this.props.id}`?api_key=34d52a2b-a0ee-4c4a-8399-d10e47c13431"
    )
      .then(serverAnswer => serverAnswer.json())
      .then(cData => {
        console.log(cData);
        const commentData = cData;
        this.setState({ commentData });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.props.videoData);
    return (
      <React.Fragment>
        <Header />
        <div className="body-content">
          <BigScreenVideo
            className="main-video-box"
            videoPlay={this.props.playTv}
          />
          {this.state.videoData ? (
            <VideoList
              className="video-list-container"
              videoData={this.state.videoData}
              getCommentData={this.getCommentData}
            />
          ) : (
            <p>loading...</p>
          )}
        </div>
        <CommentZone commentData={this.state.commentData} />
      </React.Fragment>
    );
  }
}

export default App;
