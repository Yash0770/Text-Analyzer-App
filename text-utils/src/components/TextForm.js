import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UperrCase is clicked"+text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }
  const handleCopyClick = ()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success")
  }
  const handleClearClick = ()=>{
    setText("")
    props.showAlert("Text Cleared!", "success")
  }
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value) 
  }
  const [text, setText] = useState('')
  // text = "Change text"   Wrong way to change the state
  // setText("Change text")    Correct way to change the State 

  return (
        <>
          <div className='container' style={{ color : props.mode ==='dark' ? 'white':'#0f1544' }} >
            <h1>{props.heading}</h1>
              <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor : props.mode ==='dark' ? 'rgb(29 38 110)':'white', color:  props.mode ==='dark' ? 'white':'#0f1544' }} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          </div>  
          <div className="container my-4" style={{ color : props.mode ==='dark' ? 'white':'#0f1544' }} >
              <h2>Your text Summary</h2>
              <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0 ? text : 'Nothing to preview!'}</p>
            </div>  
        </>
  )
}