import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("handle uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowerClick=()=>{
        // console.log("handle uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick=()=>{
        // console.log("handle uppercase was clicked" + text);
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("handle on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    return (
        <>
            <div style={{color: props.mode==='dark'?'white':'#0b385f'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#0b385f', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-success" onClick={handleClearClick}>Clear</button>
                
            </div>

            <div className="container my-3 p-2 border" style={{color: props.mode==='dark'?'white':'black'}}>
                <p>{text.split(' ').length} Words or {text.length} Characters</p>
                
            </div>
    </>
  )
}
