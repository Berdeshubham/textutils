import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';


function App() {
  const [mode , setmode] = useState('light');
  const[modeName,setmodeName] = useState('Enable Dark Mode')
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      setmodeName('Enable Light Mode')
      document.body.style.backgroundColor = "#051f3aeb";
    }
    else{
      setmode('light')
      setmodeName('Enable Dark Mode')
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" abouttext="about me" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
    <div className="container my-3">  {/*my-3 is for margin*/}
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;
