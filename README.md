 <div align="center">
  <h2>React Loading Screen</h2>
  <blockquote>A simple full-screen loading component for React</blockquote>


</div>



## 📦 Getting Started

```
npm i react-loading-screen --s
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

