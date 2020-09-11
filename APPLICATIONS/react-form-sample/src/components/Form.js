import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: "",
      inputTextAreaValue: "",
      selectOptionValue: "",
      checkBoxValue1: false,
      checkBoxValue2: false
    };
  }

  handleInputTextValue = event => {
    this.setState({ inputTextValue: event.target.value });
  };

  handleInputTextAreaValue = event => {
    this.setState({ inputTextAreaValue: event.target.value });
  };

  handleSelectOptionValue = event => {
    this.setState({ selectOptionValue: event.target.value });
  };

  handleCheckBoxValue = event => {
    const checkBoxName = event.target.name;
    const checkBoxValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({ [checkBoxName]: checkBoxValue });
  };

  handleFormSubmit = event => {
    alert(
      `inputBox = ${this.state.inputTextValue} 
      textArea = ${this.state.inputTextAreaValue} 
      selctOpton = ${this.state.selectOptionValue} 
      checkBox1 = ${this.state.checkBoxValue1}
      checkBox1 =  ${this.state.checkBoxValue2}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Enter the String</label>&nbsp;
            <input
              type="text"
              value={this.state.inputTextValue}
              onChange={this.handleInputTextValue}
            />
          </div>
          <br />
          <br />
          <div>
            <label>Comments:</label>&nbsp;
            <textarea
              value={this.state.inputTextAreaValue}
              onChange={this.handleInputTextAreaValue}
            />
          </div>
          <br />
          <br />
          <div>
            <label>Select Subject</label>&nbsp;
            <select
              value={this.state.selectOptionValue}
              onChange={this.handleSelectOptionValue}
            >
              <option value="select">SELECT</option>
              <option value="reactjs">REACTJS</option>
              <option value="java">JAVA</option>
              <option value="cloud">CLOUD</option>
              <option value="nodejs">NODEJS</option>
            </select>
          </div>
          <br />
          <br />
          <div>
            <label>Terms And Conditions</label> &nbsp;
            <input
              type="checkbox"
              name="checkBoxValue1"
              value={this.state.checkBoxValue1}
              onChange={this.handleCheckBoxValue}
            />
          </div>
          <br />
          <br />
          <div>
            <label>Agreement</label> &nbsp;
            <input
              type="checkbox"
              name="checkBoxValue2"
              value={this.state.checkBoxValue2}
              onChange={this.handleCheckBoxValue}
            />
          </div>
          <br />
          <br />
          <button type="submit">save</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
