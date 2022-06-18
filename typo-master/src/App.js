import React, { useEffect } from "react";
import randomWords from "random-words";
import { useState } from "react";
import "./App.css";

const number_of_words = 200;
const seconds = 60;
function App() {
  const [words, setWords] = useState([]);

  //start the countdown using useState
  const [countDown, setCountDown] = useState(seconds);

  useEffect(() => {
    setWords(generateWords());
  }, []);
  //concept of closure is applied here...

  function start() {
    console.log("clicked");
    let interval = setInterval(() => {
      //console.log("clicked");
      setCountDown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);
  }

  function generateWords() {
    return new Array(number_of_words).fill(null).map(() => randomWords());
  }

  return (
    <div className="App">
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>60</h2>
        </div>
      </div>
      <div className="control is-expanded section">
        <input
          className="input is-primary"
          type="text"
          placeholder="Primary input"
        ></input>
      </div>
      <div className="section">
        <button
          className="button is-primary"
          onClick={() => {
            start();
          }}
        >
          Start
        </button>
      </div>
      <div className="section">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((word, i) => (
                <>
                  <span>{word}</span>
                  <span> </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
