import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BigScreenVideo from "./BigScreenVideo";

class ListItem extends Component {
  render() {
    console.log(this.props.videoData);
    return (
      <>
        <Router>
          <Link
            to="/CommentZone"
            onClick={() => this.props.getCommentdata(this.props.Id)}
          >
            <div className="video-l-container">
              <div className="video-list-box">
                <div className="ls-mini-video">
                  <img
                    className="placeholder-image"
                    src={this.props.videoImage}
                    alt="i don't know"
                  />
                </div>
                <div className="rs-text-video">
                  <p className="video_title">{this.props.title}</p>
                  <p className="user-channel-name">{this.props.channel}</p>
                  <p className="view-counter">{this.props.viewCount} Views</p>
                </div>
              </div>
            </div>
            <BigScreenVideo playTv={this.props.videoImage} />
          </Link>
        </Router>
      </>
    );
  }
}
export default ListItem;
