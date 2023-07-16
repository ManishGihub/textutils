import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text", "success");
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied the text", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  return (
    <div
      style={{
        backgroundColor: props.mode === "dark" ? "#182a58" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>Enter Text here</h1>
      <div className="py-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "#182a58" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Clear extra spaces
      </button>
      <div className="container py-3">
        <h2>word Analysis</h2>
        <p>
          Contain {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} minutes of time is required.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something above in the textBox to preview it"}
        </p>
      </div>
    </div>
  );
}
