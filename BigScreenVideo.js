import React from "react";
// import mainVideo from './media/BrainStationSuppliedMedia.mp4';
import CommentZone from "./CommentZone";

class BigScreenVideo extends React.Component {
  render() {
    return (
      <div className="main-video-box">
        <div className="video-container">
          <video
            id="video_box"
            autoPlay
            controls={["PlayPause", "Seek", "Time", "Volume", "FullScreen"]}
            src={this.props.playTv}
            type="video/mp4"
          />{" "}
        </div>
        <div className="video__details">
          <p className="video_title">
            Jose Bautista hammers go-ahead three-run shot in ALDS Game 5,
            delivers epic bat flip
          </p>
          <div className="video-details_lower-container">
            <div className="view-count-group">
              <p className="view_count">2,304,189</p>
              <p className="view-text">views</p>
            </div>
            <div className="detail-group">
              <div className="vid-detail-grp-up">
                <img
                  className="video-icon"
                  src="../Icons/ThumbsUp.svg"
                  alt="thumps up"
                />
                <p className="thumb-up-value">6.9K</p>
              </div>
              <div className="vid-detail-grp-dn">
                <img
                  className="video-icon"
                  src="../Icons/ThumbsDown.svg"
                  alt="thumps down"
                />
                <p className="thumb-dn-value">202</p>
              </div>
              <div className="vid-grp-share">
                <img
                  className="video-icon"
                  src="../Icons/Share.svg"
                  alt="Share"
                />
                <p className="share-me">Share</p>
              </div>
            </div>
          </div>
        </div>
        <CommentZone />
      </div>
    );
  }
}
export default BigScreenVideo;
