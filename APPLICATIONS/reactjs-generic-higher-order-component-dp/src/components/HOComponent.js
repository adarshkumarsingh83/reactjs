import React from "react";
import configuration from "../store/configuration.json";

const HOComponent = OriginalComponent => {
  class CounterEnableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        stars: 0
      };
    }

    countSubmit = () => {
      const startCounter = configuration[this.props.name];
      console.log(startCounter);
      this.setState(prevState => {
        const { name } = this.props;
        return {
          count: prevState.count + 1,
          stars: (prevState.count + 1) * startCounter
        };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          stars={this.state.stars}
          countSubmit={this.countSubmit}
          {...this.props}
        />
      );
    }
  }
  return CounterEnableComponent;
};

export default HOComponent;
