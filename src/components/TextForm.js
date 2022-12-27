import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("handle uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        // console.log("handle uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("handle on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
                
            </div>

            <div className="container my-3 p-2 border">
                <p>{text.split(' ').length} Words or {text.length} Characters</p>
                
            </div>
    </>
  )
}
