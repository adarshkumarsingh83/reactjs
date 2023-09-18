
import React  from "react";

const MyInput = (props) => {

    const [input, setInput] = React.useState(" ");

    const onChange = (e) => {
        setInput(e.target.value)
        props.handleCallBack(e.target.value)     
    }

    return (
        <div>
            <label>
                {props.lableName} &nbsp;
                <input type="text"  value={input } onChange={(e) => onChange(e)}/>
            </label>
        </div>
    )

}

export default MyInput