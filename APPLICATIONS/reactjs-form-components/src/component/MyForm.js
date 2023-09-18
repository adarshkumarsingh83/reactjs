import  { Component } from "react";
import MyInput from "./MyInput";
import MySelectOption from "./MySelectOption";
import MyRadioButton from "./MyRadioButton";
import MyCheckbox from "./MyCheckbox";

class Myform extends Component{

    constructor(props) { 
         super(props);
            this.state = {
                firstName: " ",
                lastName: " ",
                option: " ",
                radioOption: " ",
                checkBoxOption: " "
            };
    };
    
    handleCallBackFistName = (firstNameValue) => {
        this.setState({ firstName: firstNameValue })
    };
    
    handleCallBackLastName = (lastNameValue) => {
        this.setState({ lastName: lastNameValue })
    };

    handleCallBackOpton = (optionValue) => {
        this.setState({ option: optionValue })
    };
    
    handleCallBackRadioOption = (optionValue) => {
        this.setState({ radioOption: optionValue })
    };

    handleCallBackCheckBoxOption = (optionValue) => {
        this.setState({ checkBoxOption: optionValue })
    };

    handleSubmit = (e) => {

        alert(
            `firstName = ${this.state.firstName}
                lastName = ${this.state.lastName}
                option = ${this.state.option}
                radioOption = ${this.state.radioOption}
                checkBoxOption = ${this.state.checkBoxOption}`
        );
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.option);
        console.log(this.state.radioOption);
        console.log(this.state.checkBoxOption);
        e.preventDefault();
    };
    
    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <MyInput lableName="FirstName" handleCallBack={this.handleCallBackFistName} />
                <MyInput lableName="LastName" handleCallBack={this.handleCallBackLastName} />   <br />
                <MySelectOption lableName="Select Option" handleCallBack={this.handleCallBackOpton} />
                <br /> <br /> <MyRadioButton handleCallBack={this.handleCallBackRadioOption} /> <br />
                <MyCheckbox handleCallBack={this.handleCallBackCheckBoxOption} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    };
};

export default Myform;