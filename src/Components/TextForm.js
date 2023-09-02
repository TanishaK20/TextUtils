import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase clicked")
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleOnChange=(event)=>{
    console.log("onChange clicked");
    setText(event.target.value);
  }

  const handleLoClick = ()=>{
    let newText= text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to lowercase","success");

  }

  
  const find=()=>{
    let newText=text;
    newText="tanisha";
    console.log("find clicked")
      setText(newText);
    }
  


  const[text,setText]=useState('');
  // setText("new text");

  return (
    <>
    <div className="container">

 <h1 style={{color:props.mode=='dark'?'white':'black'}}>{props.heading}</h1>
  
  <div className ="mb-3">
    <textarea className ="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'light', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" cols="80"></textarea>
  </div>
  <button className={`btn btn-${props.mode=='light'?'primary':'dark'} mx-1 my-1`} onClick={handleUpClick}>convert to uppercase</button>
  <button className={`btn btn-${props.mode=='light'?'primary':'dark'} mx-1 my-1`} onClick={handleLoClick}>convert to lowercase</button>
  <button className={`btn btn-${props.mode=='light'?'primary':'dark'} mx-1 my-1`} onClick={find}>find</button>

    </div>

    <div className="container my-3"style={{color:props.mode=='dark'?'white':'black'}}>
      <h3>your text summery </h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
  }
  

