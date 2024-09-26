import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpCLick = ()=>{
        //console.log("UPPERCASE was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    
    const handleLoCLick = ()=>{
        //console.log("UPPERCASE was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
   
   
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
   
    const handleClear = (event)=>{
       // console.log("on clear");
        setText('');
        props.showAlert("TextArea Cleared","success");
        
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select( );
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copy into ClipBoard","success");
    }

    const [text,setText] = useState('');
    
    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            
            <div className="container">
                <h1>{props.heading}</h1>
                <textarea className ="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'rgb(36 41 45)':'white',color : props.mode==='dark'?'white':'black'}} placeholder={props.comment} id="myBox" rows="6" ></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpCLick}>convert the Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoCLick}>convert the Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minuts to reading Time</p>

            </div>
            <div className="container my-3">
            <h2>Preview of Text</h2>
            <p>{text.length>0?text : "Enter Somthing In The Above TextArea For Previes Here"}</p>
            </div>
        </div>
    )
}
