import React from "react";

class CalClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Class Component {this.state.count}</h1>
        <div>
          <label>increment</label>&nbsp;
          <button
            onClick={() => {
              this.setState(prevState => {
                return {
                  count: prevState.count + 1
                };
              });
            }}
          >
            incrmented
          </button>
        </div>
        <br />
        <div>
          <label>increment 5</label>&nbsp;
          <button
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                this.setState(prevState => {
                  return {
                    count: prevState.count + 1
                  };
                });
              }
            }}
          >
            incrmented 5
          </button>
        </div>
        <br />
        <div>
          <label>decrement</label>&nbsp;
          <button
            onClick={() => {
              this.setState(prevState => {
                return {
                  count: prevState.count - 1
                };
              });
            }}
          >
            decrement
          </button>
        </div>
        <br />
        <div>
          <label>decrement5</label>&nbsp;
          <button
            onClick={() => {
              for (let i = 0; i < 5; i++) {
                this.setState(prevState => {
                  return {
                    count: prevState.count - 1
                  };
                });
              }
            }}
          >
            decrement 5
          </button>
        </div>
        <br />
        <div>
          <label>rest</label>&nbsp;
          <button
            onClick={() => {
              this.setState(prevState => {
                return {
                  count: 0
                };
              });
            }}
          >
            rest
          </button>
        </div>
      </div>
    );
  }
}

export default CalClassComponent;
