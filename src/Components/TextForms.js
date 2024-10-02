import React, { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState("");
    const [count, setcount] = useState(0);
    // text="new text";
    // setText("new text");
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleOnChange = (event) => {
        console.log("handle OnChange");
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared", "success");

    }
    const handleLoClick = () => {
        // console.log("UpperCase was Clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase", "success");

    }
    const countVowels = (str) => {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let count = 0;
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        setcount(count);
        alert(`The text contains ${count} vowels.`);

    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCopy = () => {
        let text = document.querySelector("#my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed", "success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white ' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white'
                        , color: props.mode === 'dark' ? 'white' : '#042743'
                    }} id="my-box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick} >
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >
                    Remove Extra Space
                </button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button onClick={() => countVowels(text)} className="btn btn-primary mx-2 my-2">VowelCounts</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((word) => word).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it"}</p>
                <h2>Vowel Counts</h2>
                <p>{count} vowels</p>
            </div>
        </>
    )
}
