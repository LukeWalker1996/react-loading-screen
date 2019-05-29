import "./css/App.css";
import Lib from "./../lib";
import React, { Component } from "react";
import {
  SquareFlip,
  DoublePulse,
  Wave,
  WanderingCubes,
  Pulse,
  ChasingDots,
  ThreeBounce,
  Circle,
  CubeGrid,
  FadingCircle
} from "./loaders";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    let libInstance = new Lib();
  }
  renderSpinner = (type, colour) => {
    switch (type) {
      case "square-flip":
        return <SquareFlip colour={colour} />;
      case "double-pulse":
        return <DoublePulse colour={colour} />;
      case "wave":
        return <Wave colour={colour} />;
      case "wandering-cubes":
        return <WanderingCubes colour={colour} />;
      case "pulse":
        return <Pulse colour={colour} />;
      case "chasing-dots":
        return <ChasingDots colour={colour} />;
      case "three-bounce":
        return <ThreeBounce colour={colour} />;
      case "circle":
        return <Circle colour={colour} />;
      case "cube-grid":
        return <CubeGrid colour={colour} />;
      case "fading-circle":
        return <FadingCircle colour={colour} />;
      default:
        return null;
    }
  };

  render() {
    const loading = true,
      background = "#e3e3e3",
      type = "fading-circle",
      loadingText = null,
      colour = "red";

    // const { loading, background, colour, type } = this.props;

    if (loading == null) {
      return null;
    }

    return loading ? (
      <div
        style={{ background: background != null ? background : "#ffffff" }}
        className="rls-fullscreen"
      >
        {this.renderSpinner(
          type == null ? "square-flip" : type,
          colour == null ? "#000000" : colour
        )}
        {/* {loadingText != null ? loadingText : null} */}
      </div>
    ) : null;
  }
}

export default LoadingScreen;
