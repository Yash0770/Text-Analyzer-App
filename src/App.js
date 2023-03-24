// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { Route, Routes} from 'react-router-dom'

// let name = "Yash"
function App() {
  const [mode, setMode] = useState("light")    //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#0f1544'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  //red mode
  const toggleRedMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = 'rgb(129 34 34)'
      showAlert("Red dark mode has been enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  //green mode
  const toggleGreenMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#33570d'
      showAlert("Green dark mode has been enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar 
      title="TextUtils"
      aboutText ="About"
      mode = {mode}
      toggleMode = {toggleMode}
      toggleRedMode = {toggleRedMode}
      toggleGreenMode = {toggleGreenMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">

        <Routes>
          {/* <Route path='/' element={<Navbar/>} /> */}
          <Route exact path='/' element={
                  <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/>
          <Route exact path='/about' element={<About mode={mode} />} />

        </Routes>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
