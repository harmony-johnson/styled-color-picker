import { useState } from "react"

export default function Form({ onSubmit }) {
    const [textValue, setTextValue] = useState({
        bgColor: "",
        textColor: "",
    })

    function updateText(event) {
        const {name, value} = event.target
        setTextValue(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    
    function submitForm() {
        const temp = {...textValue}
        setTextValue(prevValue => ({
            bgColor: "",
            textColor: "",
        }))
        onSubmit(temp)
        return {
            temp
        }
    }

    return (
        <>
            <h2>This is the text</h2>
                    <input 
                    name="bgColor"
                    onChange={updateText}
                    placeholder="new background color"
                    value={textValue.bgColor}/>
                    <input 
                    name="textColor"
                    onChange={updateText}
                    placeholder="new text color"
                    value={textValue.textColor}/>
                    <button onClick={submitForm}>Change</button>
        </>
    )
}