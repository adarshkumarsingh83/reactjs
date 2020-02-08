import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handlePublicPage = () => {
    console.log("handlePublicPage()");
    this.props.history.push("/public");
  };

  handlePrivatePage = () => {
    console.log("handlePrivatePage()");
    this.props.history.push("/private");
  };

  render() {
    return (
      <div>
        <div>
          <label>Private Page</label>
          <button onClick={this.handlePrivatePage}>PRIVATE</button>
        </div>
        <div>
          <label>Public Page</label>
          <button onClick={this.handlePublicPage}>PUBLIC</button>
        </div>
      </div>
    );
  }
}

export default Home;
