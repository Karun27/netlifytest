import React, { useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import './App.css';

const styles = { height: 400, width: "100%" };


function Background() {
  const [autoplay, setAutoplay] = useState(true);
  const [icon, setIcon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  }, []); 
  return (
    <div className="container" id="bye">
     
          <RBCarousel
            animation={true}
            autoplay={autoplay}
            slideshowSpeed={2000}
            defaultActiveIndex={0}
            leftIcon={icon.leftIcon}
            rightIcon={icon.rightIcon}
            onSelect={_onSelect}
            ref={slider_ref}
            version={4}
          >
             
            <div style={{ ...styles, backgroundColor: "#7d90e3", height: 630 }}>
              <img
                style={{ width: "75%", height: "2", marginLeft: 140, marginTop: 50 }}
                src={require('./images/md2.png')}
              />
              {/* <div className="carousel-caption">Big Data </div> */}
            </div>
            <div style={{ ...styles, backgroundColor: "#D95151", height: 630 }}>
              <img
                style={{ width: "75%", height: "2", marginLeft: 140, marginTop: 150 }}
                src={require('./images/md6.jpg')}
              />
             
            </div>
            <div style={{ ...styles, backgroundColor: "#B6D45A", height: 630 }}>
              <img
                style={{ width: "75%", height: "150", marginLeft: 140, marginTop: 150 }}
                src={require('./images/md3.jpg')}
              />
              
            </div>
            <div style={{ ...styles, backgroundColor: "#51BED9", height: 630 }}>
            
              <img
                style={{ width: "75%", height: "150", marginLeft: 140, marginTop: 150 }}
                src={require('./images/md5.jpg')}
              />
              
            </div>
            <div style={{ ...styles, backgroundColor: "#A151D9", height: 630 }}>
            
            <img
              style={{ width: "75%", height: "250", marginLeft: 140, marginTop: 150 }}
              src={require('./images/md1.jpg')}
            />
           
          </div>
          <div style={{ ...styles, backgroundColor: "#D95180", height: 630 }}>
            
            <img
              style={{ width: "75%", height: "250", marginLeft: 140, marginTop: 150 }}
              src={require('./images/md4.jpg')}
            />
          
          </div>
            
            
          </RBCarousel>

    </div>
  );
}

export default Background;