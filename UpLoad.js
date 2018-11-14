import React from "react";
import Header from "./Header";

class UpLoad extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="background-box">
          <img src="/icons/FullScreen.svg" alt="background color" />
          <img src="/icons/LargeUpLoad.svg" alt="upload icon" />
        </div>
      </React.Fragment>
    );
  }
}
export default UpLoad;
