import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from './Components/About';
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-dark";

      //   setInterval(()=>{
      //     document.title=' TextUtils is amazing';
      //   },2000);
      // setInterval(()=>{
      //   document.title='install TextUtils now';
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-dark";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about"element={<About mode={mode}/>}/> */}
              
              
            {/* <Route exact path="/" */}
              {/* element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter your text to analyse"
                mode={mode}
              />
              {/* }/> */}
            
          {/* </Routes> */}
        </div>
      {/* </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
