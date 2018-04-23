import React, { Component } from 'react';
import ReactImgix from 'react-imgix';

import './App.css';

class App extends Component {
  render() {
    const image1 = 'https://lightbox-test.imgix.net/images/uploads/1522273431390-dunkirk_16x9_1920x1080_web-hotspot.jpg';
    const image2 = 'https://lightbox-test.imgix.net/images/uploads/1517369260590-Good%20doctor.jpg';
    return (
      <div className="App">
        <div className="image1">
          <h3>fix size image</h3>
          <div className="image-wrapper">
            <ReactImgix
              className="image"
              src={image1}
              fit={'crop'}
              crop={'faces'}
              imgProps={{draggable:false}}
            />
          </div>
        </div>


        <div className="image2">
          <h3>dynamic size image</h3>
          <div className="image-wrapper">
            <ReactImgix
              className="image"
              src={image2}
              fit={'crop'}
              crop={'faces'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
