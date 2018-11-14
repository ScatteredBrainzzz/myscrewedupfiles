import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoListContainer extends Component {
  render() {
    console.log(this.props.v_Data);

    return (
      <div className="video-list-container">
        <p id="video-container-heading">Up next</p>

        {this.props.videoData.map((videoItem, index) => (
          <VideoItem
            key={videoItem.Id || index}
            getCommentData={this.props.getCommentData}
            videoImage={videoItem.Image}
            title={videoItem.title}
            channel={videoItem.channel}
            viewCount={videoItem.views}
          />
        ))}
      </div>
    );
  }
}

export default VideoListContainer;
