import React from "react";
import "./App.css";


class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="background">
          <div>
        <div className="logo">
          <img 
          src="/images/ironhack-logo.svg" 
          alt="" 
          width="50"
          />
          </div>
        </div>
      <div className="title" >
   <h1>Say hello to ReactJS</h1>
      </div>
      <div className="text">
   <h5>You will learn a Frontend framework from scratch, to becaome a Ninka Developer</h5>
      </div>
      <div>
     <button className="button">
       Awesome!
     </button>
     </div>
      </div>

<div className="containe-of-images_container">
      <div className="images_container">
          <div className="image">
            <img 
            src="/images/icon1.png" 
            alt="icon1" 
            />
            <div className="image-text">
            <h4>Declarative</h4>
            <h5>React makes it painless to create interactive UIs.</h5>
            </div>
          </div>

          <div className="image">
            <img 
            src="/images/icon2.png" 
            alt="icon1"  
            />
            <div className="image-text">
            <h4>Components</h4>
            <h5>Built encapsulated components that manage their state.</h5>
            </div>
          </div>

          <div className="image">
            <img 
            src="/images/icon3.png" 
            alt="icon1" 
            />
            <div className="image-text">
            <h4>Single-Way</h4>
            <h5>A set of immutable values are passed to the components.</h5>
            </div>
          </div>
          <div className="image">
            <img 
            src="/images/icon4.png" 
            alt="icon1" 
            />
            <div className="image-text">
            <h4>JSX</h4>
            <h5>Statically-typed,designed to run on modern browsers.</h5>
            </div>
          </div>
      </div>
      </div>

      </div>
    );
  }
}

export default App;