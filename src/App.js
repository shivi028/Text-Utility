import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removebodyclasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  
  const toggle = (cls)=>{
    removebodyclasses();
    document.body.classList.add('bg-'+cls)
  }

  const toggleMode = () => {
   removebodyclasses();
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode is Enabled', 'success')
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing'
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', 'success')
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    <Router>
      {/* passing props in functional components, they should be read only */}

      <Navbar title='TextUtils' abouttext='About TextUtils' mode={mode} toggleMode={toggleMode} toggle={toggle}/>
      {/* <Navbar abouttext='About TextUtils'/> */}
      {/* <Navbar/> */}
      <Alert alert={alert} />
      

      <div className='container my-2'>
        <Routes>
          <Route exact path='/about' element={<About mode={mode}/> }> </Route>

          <Route exact path='' element={<TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode} showAlert={showAlert} /> }> </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;