import React from "react";
import "./style.css";

class ImageContainer extends React.Component {
  render() {
    let { imgUrl } = this.props;
    return (
      <div className="imgBox">
        <img
          src={imgUrl}
          alt="dog"
          className="myImage"
          style={{ display: !imgUrl ? "none" : "block" }}
        />
      </div>
    );
  }
}

export default ImageContainer;
