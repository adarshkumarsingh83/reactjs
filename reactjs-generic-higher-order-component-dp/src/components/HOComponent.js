import React from "react";

const HOComponent = (OriginalComponent, startCounter) => {
  class CounterEnableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        stars: 0
      };
    }

    countSubmit = () => {
      this.setState(prevState => {
        const { name } = this.props;
        return {
          count: prevState.count + 1,
          stars: prevState.count + 1 * startCounter
        };
      });
    };

    render() {
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
