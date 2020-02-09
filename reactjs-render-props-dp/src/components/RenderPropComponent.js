import React from "react";

class RenderPropComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      stars: 0
    };
  }

  countSubmit = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        stars: (prevState.count + 1) * 2
      };
    });
  };

  render() {
    return (
      <div>
        {this.props.render(
          this.state.count,
          this.state.stars,
          this.countSubmit
        )}
      </div>
    );
  }
}
export default RenderPropComponent;
