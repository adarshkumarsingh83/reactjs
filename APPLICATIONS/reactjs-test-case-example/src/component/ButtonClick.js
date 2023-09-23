import React from "react"

const ButtonClick = ({ msg }) => {
    
    const [displayMsg, setDisplayMsg] = React.useState("");

    const handleClick = (event) => {
        event.preventDefault();
        setDisplayMsg(msg);
        console.log("button click")
    }

    const clearMsg = (event) => {
        event.preventDefault();
        setDisplayMsg(" ");
        console.log("button click clearMsg")
    }

    return (
        <div>
            <h1>{ displayMsg }</h1>
            <br/>
            <button  data-testid="dislay" onClick={handleClick} >show msg </button> &nbsp;
            <button  data-testid="clear" onClick={clearMsg}> clear msg </button>
      </div>  
    );
}

export default ButtonClick;