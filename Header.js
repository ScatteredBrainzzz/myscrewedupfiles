import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="head-group-container">
          <div className="header__left">
            <div className="logo_box">
              <img
                className="company-logo"
                src="./Icons/BrainFlixLogo.svg"
                alt="company logo"
              />
            </div>
          </div>
          <div className="header__center">
            <div className="search-text-box">
              <input type="text" id="search" placeholder="Search" />
              <div className="search-box-container">
                <button id="textSearch">
                  <img
                    class-name="search-submit"
                    src="../Icons/Search.svg"
                    alt="search button"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="header__right">
            <div className="ls__right">
              <input
                type="image"
                id="add-video"
                alt="addvideobutton"
                className="user-added-video"
                src="../Icons/ContentUpload.svg"
              />
            </div>
            <div className="rs__right">
              <input
                type="image"
                id="user-image"
                alt="users image avatar"
                className="user-photo"
                src="./Images/john_gibbons.jpg"
                width="40px"
                height="40px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
