
const messageText = () => {
    return 'function component';
}

const InnerFunctionComponent = (props) => {
    const { name } = props;
    console.log(name)
    console.log(props.name)
    return <b> {messageText()}</b>
}

export default InnerFunctionComponent;