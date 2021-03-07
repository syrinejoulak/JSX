import imageInSrc from "./imageInSrc.jpg"
import './style.css';

function App() {
  return (
    <div className="App">
<div style={{border:"solid 1px black", maxWidth:"100vw"}} />

<h1 className="title red">Your name here</h1>

<br />
<div className="images">
<img src= {imageInSrc} id="src"/>

<br />

<img src="/imageInPublic.jpg" id="public"/>
</div>

<video width="320" height="240" controls />

<source src="myVideo.mp4" type="video/mp4" />


    </div>
  );
}

export default App;
