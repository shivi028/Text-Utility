import React, { useState } from 'react';

export default function TextForm(props) {
    const uppercase = () =>{
        console.log('upper case', text)
        setText('you have changed the text')
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to Upper Case', 'success')
    }
    const lowercase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to Lower Case', 'success')
    }
    const handleOnChange = (event) =>{
        console.log('handleOnChange is clicked')
        setText(event.target.value);
    }
    const cleartext = () =>{
        let newtext = "";
        setText(newtext);
        props.showAlert('Text has been cleared', 'success')
    }
    const handleCopy = () =>{
        // var text = document.getElementById('myBox');
        // text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard','success');
    }
 
    const removespace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra Spaces Removed', 'success');
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h3 className='mb-3'>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={uppercase}>convert to upper case</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={lowercase}>convert to lower case</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={cleartext}>clear text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={removespace}>Remove Space</button>
        </div>

        <div className='container my-1'style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length} words and {text.length} charachters</p>
            <p>{0.008 * text.split(' ').filter((ele)=>{return ele.length !== 0}).length} minutes to read the text</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

        </>
    )
}

