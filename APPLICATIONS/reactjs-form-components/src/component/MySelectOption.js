import React from "react";

const MySelectOption = (props) => {
    
const [input, setInput] = React.useState(false);

const handleOnChange = (e) => {
    setInput(e.target.value);
    props.handleCallBack(e.target.value);
}

    return (
         <label>
           {props.lableName} &nbsp;
          <select value={input} onChange={e=>handleOnChange(e)}>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
                <option value="option4">option4</option>
                <option value="option5">option5</option>                
            </select>
        </label>
                     
    );

}

export default MySelectOption;