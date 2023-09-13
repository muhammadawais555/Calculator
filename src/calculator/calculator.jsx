import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import "./calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const buttonclickhandler = (event) => {
    setResult(result?.concat(event.target.value));
  };
  const equalbuttonhandler = () => {
    setResult(eval(result)?.toString());
  };

  const clearbutton = () => {
    setResult("");
  };

  return (
    <>
      <div className="card">
        <Fade right>
          <h2>
            <Typewriter
              options={{
                strings: ["Welcome To!", "My Calculator 👨"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Fade>
        <div className="card_body">
          <div className="card_upperportion">
            <div className="row">
              <div className="col-12">
                <div className="result_box">
                  <input type="text" value={result}></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card_buttons">
            <div className="row">
              <div className="col-3">
                <button value="7" onClick={buttonclickhandler}>
                  7
                </button>
              </div>
              <div className="col-3">
                <button value="8" onClick={buttonclickhandler}>
                  8
                </button>
              </div>
              <div className="col-3">
                <button value="9" onClick={buttonclickhandler}>
                  9
                </button>
              </div>
              <div className="col-3">
                <button value="*" onClick={buttonclickhandler}>
                  x
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button value="4" onClick={buttonclickhandler}>
                  4
                </button>
              </div>
              <div className="col-3">
                <button value="5" onClick={buttonclickhandler}>
                  5
                </button>
              </div>
              <div className="col-3">
                <button value="6" onClick={buttonclickhandler}>
                  6
                </button>
              </div>
              <div className="col-3">
                <button value="/" onClick={buttonclickhandler}>
                  /
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button value="1" onClick={buttonclickhandler}>
                  1
                </button>
              </div>
              <div className="col-3">
                <button value="2" onClick={buttonclickhandler}>
                  2
                </button>
              </div>
              <div className="col-3">
                <button value="3" onClick={buttonclickhandler}>
                  3
                </button>
              </div>
              <div className="col-3">
                <button value="+" onClick={buttonclickhandler}>
                  +
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button value="0" onClick={buttonclickhandler}>
                  0
                </button>
              </div>
              <div className="col-3">
                <button value="C" onClick={clearbutton}>
                  C
                </button>
              </div>
              <div className="col-3">
                <button value="=" onClick={equalbuttonhandler}>
                  =
                </button>
              </div>
              <div className="col-3">
                <button value="-" onClick={buttonclickhandler}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
