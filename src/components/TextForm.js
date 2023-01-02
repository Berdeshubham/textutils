import React, {useState} from 'react'  //{useState} is a hook 

export default function TexForm(props){  
    
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearClick = ()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text clear", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }

    const [text,setText]= useState("")  //text is a variable & setText is a method to change the valu of a variable
                   // text="new text";  // wrong way to change the state
                   // setText("new text"); //correct way to change the state
    return(
        <>
        <div className='container' style={{color:props.mode==='dark'? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 'lightgrey'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn_primary mx-1" onClick={handleUpClick} style = {{backgroundColor:'grey'}}>Convert to Uppercase</button> {/** mx-1 is for spacing it is bootstrap class */}
            <button className="btn_primary mx-1" onClick={handleLoClick} style = {{backgroundColor:'grey'}}>Convert to Lowercase</button>
            <button className="btn_primary mx-1" onClick={handleClearClick} style = {{backgroundColor:'grey'}}>Clear Text</button>
            <button className="btn_primary mx-1" onClick={handleCopy} style = {{backgroundColor:'grey'}}>Copy Text</button>
            <button className="btn_primary mx-1" onClick={handleExtraSpaces} style = {{backgroundColor:'grey'}}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'? 'white': 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p> {/** 0.008 this valu is time to read a single word and this value comes from google */}
            <h2>Preview</h2>
            <p>{text.length<=0?  "Enter somthing in the textbox above to preview it here" : text}</p>
        </div>
        </>
    )

}