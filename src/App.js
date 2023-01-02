import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode , setmode] = useState('light');
  const[modeName,setmodeName] = useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null);
  
  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      setmodeName('Enable Light Mode')
      document.body.style.backgroundColor = "#051f3aeb";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setmode('light')
      setmodeName('Enable Dark Mode')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" abouttext="about me" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
    <Alert alert={alert}/>
    <div className="container my-3">  {/*my-3 is for margin*/}
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
