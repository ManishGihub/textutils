import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [toggleText, setToggleText] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("light");
      document.body.style.backgroundColor = "#182a58";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setToggleText("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div>
      {/*<BrowserRouter>*/}
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*<Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ 
                */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/*}
            ></Route>
          </Routes>
      </BrowserRouter>*/}
      </div>
    </div>
  );
}

export default App;
