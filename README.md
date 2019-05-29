 <div align="center">
  <h2>React Loading Screen</h2>
  <blockquote>A simple full-screen loading component for React</blockquote>


</div>



## 📦 Getting Started

```
npm i @lukewalker1996/react-loading-screen --s
```

### npm
```
import LoadingScreen from 'react-loading-screen';
import 'react-loading-screen/build/index.css';
...
```

### self-host/cdn
```
<link href="build/index.css" rel="stylesheet">
<script src="build/index.js"></script>
...
```

### Props

| Name          | type           | default       |
| ------------- |:--------------:| -------------:|
| loading       | bool           | false         |
| background    | string         | "#ffffff"     |
| colour        | string         | "#000000"     |
| type          | string         | "square-flip" |

### Usage

Example of loading controlled via the state.

```
import LoadingScreen from 'react-loading-screen'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true // control the loading screen display..
    }
  }

  /* 
   call this.hideLoading() when ready to hide the loading screen..
   this could be invoked in a callback for example. eg 
  /*
  hideLoading(){
    this.setState({
      loading: false
    })
  }

  render(){
    return (
      <div>
        <LoadingScreen
         loading={this.state.loading} // if loading is true, <LoadingScreen/> will render..
         background={"#e3e3e3"}
         colour={"#000"}
         type={"wave"}
        /> 
        <p>This is some example content, which will be shown once the loader hides</p>
      </div>
    )
  }
}
```
Example of evaluating at render..
```
  <LoadingScreen
    loading={1 + 1 == 2}
    background={"#e3e3e3"}
    colour={"#000"}
    type={"wave"}
  /> 

  <LoadingScreen
    loading={/* add your condition here... */}
    background={"#e3e3e3"}
    colour={"#000"}
    type={"wave"}
  /> 

```

### Loader types

| Name            |
| ----------------|
| square-flip     |
| double-pulse    |
| wave            |
| wandering-cubes |
| pulse           |
| chasing-dots    |
| three-bounce    |
| circle          |
| cube-grid       |
| fading-circle   |

