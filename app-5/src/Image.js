import React, { Component } from "react";

export class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
      </div>
    );
  }
}

export default Image;
