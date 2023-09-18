import React from "react";

const MyCheckbox = (props) => {

    const [option , setOption] = React.useState(false);

    const handleChange = (e) => {
         setOption(e.target.value);
        props.handleCallBack(e.target.value);
    }

    return (
        <div >
            <label><input type="checkbox" name="myRadio" value="option1"               
                onChange={handleChange} /> Option 1</label>
            <label><input type="checkbox" name="myRadio" value="option2"
                 onChange={handleChange} /> Option 2</label> <br/>
            <label><input type="checkbox" name="myRadio" value="option3"                
                onChange={handleChange} /> Option 3</label>
            <label><input type="checkbox" name="myRadio" value="option4"                
                 onChange={handleChange} /> Option 4</label>
        </div>
    );
}

export default MyCheckbox;