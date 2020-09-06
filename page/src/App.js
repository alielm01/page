import React from "react";
import "./App.css";
import home from "./home.jpg";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import forth from "./forth.png";
import fifth from "./fifth.png";
function App() {
  return (
    <div className="App">
      <div className="body">
        <h5 className="sentence">Welcome To Our Web Website</h5>
        <h1 className="banner-text">Lightning fast devices for everybody</h1>
        <img className="banner-image" src={home} width="90%" alt="" />
        <div className="container">
          <div className="first">
            <img
              src={first}
              alt=""
              className="sticky-photo hide"
              id="photoBlock0"
            />
            <img
              src={second}
              alt=""
              className="sticky-photo hide"
              id="photoBlock0"
            />
            <img
              src={third}
              alt=""
              className="sticky-photo hide"
              id="photoBlock2"
            />
            <img src={forth} alt="" className="sticky-photo" id="photoBlock3" />
            <img
              src={fifth}
              alt=""
              className="sticky-photo hide"
              id="photoBlock4"
            />
          </div>
          <div className="second">
            <div id="text">
              <h1>Title Number</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="https://www.google.com">Learn more</a>
            </div>
            <div id="text">
              <h1>Title Number</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="https://www.google.com">Learn more</a>
            </div>
            <div id="text">
              <h1>Title Number</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="https://www.google.com">Learnrn more</a>
            </div>
            <div id="text">
              <h1>Title Number</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="https://www.google.com">Learnrn more</a>
            </div>
            <div id="text">
              <h1>Title Number</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="containersmall">
          <img
            src={first}
            alt=""
            className="sticky-photo hide"
            id="photoBlock0"
          />
          <div id="small">
            <h1>Title Number</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img
            src={second}
            alt=""
            className="sticky-photo hide"
            id="photoBlock0"
          />
          <div id="small">
            <h1>Title Number</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img
            src={third}
            alt=""
            className="sticky-photo hide"
            id="photoBlock2"
          />

          <div id="small">
            <h1>Title Number</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img
            src={forth}
            alt=""
            className="sticky-photo hide"
            id="photoBlock2"
          />

          <div id="small">
            <h1>Title Number</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img
            src={fifth}
            alt=""
            className="sticky-photo hide"
            id="photoBlock2"
          />

          <div id="small">
            <h1>Title Number</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <footer>
          <p>Copyright © Your Website 2020.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
