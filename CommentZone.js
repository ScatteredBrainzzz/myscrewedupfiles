import React from "react";

//console.log(videoData);
//import UserInputContainer from '/.UserInputContainer.js'

class CommentZone extends React.Component {
  //   state = {
  //     userData: userData,
  //     videoData: videoData
  // 

  render() {
    //  console.log(videoData);
    return (
      <div className="comment-zone">
        <div className="comment-zone-upper">
          <div className="user_avatar">
            <div className="circle" />
            <div className="avatar_text">
              <p className="avatar_initials">MLB</p>
              <p className="publish_date">Published on Oct 14, 2015</p>
            </div>
          </div>
          <div className="button-container">
            <button className="subscribe">
              <div className="subscribe-text">
                <p className="button_text_one">SUBSCRIBE</p>
                <p className="button_text_two">1.2M</p>
              </div>
            </button>
          </div>
        </div>
        <div className="coment-zone-lower">
          <p className="comment-lower-text">
            10/14/15: Jose Bautista crushes a long go-ahead three-run homer in
            the 7th inning of ALDS Game 5
          </p>
          <p className="show-more">SHOW MORE</p>
        </div>
      </div>
    );
  }
}

export default CommentZone;
