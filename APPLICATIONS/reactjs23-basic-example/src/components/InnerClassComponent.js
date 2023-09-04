
import { Component } from "react";

class InnerClassComponent extends Component {


    messageText = () => {
        return 'class component';
    }

    render() {
        const { name } = this.props;
        console.log(name)
        console.log(this.props.name)
        return <b> {this.messageText()}</b>
    }

}
export default InnerClassComponent;