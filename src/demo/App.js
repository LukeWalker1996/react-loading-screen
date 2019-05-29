import './css/App.css';
import Lib from './../lib';
import React, { Component, ReactDOM } from 'react';
import { SquareFlip, DoublePulse, Wave} from './loaders';

class App extends Component {
  constructor(props){
    super(props);
    let libInstance = new Lib();
    console.log("Demo loaded!", libInstance);
    this.demoArrowMethod();
  }

  demoArrowMethod = () => {
    console.log("Arrow methods will workkkkk");
  }

  componentDidMount(){

  }

  renderSpinner = (type, colour) => {
    let loader = null;
    switch(type){
      case "square-flip":
          loader = <SquareFlip colour={colour} />
          break;
      case "double-pulse":
          loader = <DoublePulse colour={colour} />
          break;
      case "wave":
          loader = <Wave colour={colour} />
          break;
      case "wandering-cubes":
          break;
      case "pulse":
          break;
      case "chasing-dots":
          break;
      case "three-bounce":
          break;
      case "circle":
          break;
      case "cube-grid":
          break;
      case "fading-circle":
          break;
    }

    return loader;
  }

  render(){

    //const { loading, background, loader } = this.props;
    const loading = true,
    background = '#e3e3e3',
    loader = "wave",
    loadingText = null,
    colour = 'red';

    return loading ? (
      <div style={{background: background != null ? background : '#ffffff'}} className="rls-fullscreen">
        {this.renderSpinner(loader, colour)}
        {loadingText != null ? loadingText : null}
      </div>
    ) : null
  }
}

export default App;
