/*
function Welcome() {
    return <h1>WELCOME TO THE 23 REACTJS </h1>
}*/
import InnerClassComponent from "./InnerClassComponent.js"
import InnerFunctonComponent from "./InnerFunctionComponent.js"

const welcomeText = (props) => {
    console.log(props)
    //return <b> WELCOME  {props.name} </b>
    return "welcome " + props.name;
};


const TopComponent = (props) => {
    return <h1> {welcomeText(props)}  <InnerClassComponent name="class comp props" />
        {props.children}  <InnerFunctonComponent name="funct comp props" /> </h1>
}

export default TopComponent;