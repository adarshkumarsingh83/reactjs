import React from 'react'

class Wish extends React.Component {


    constructor() {
        super()
        this.state = {
            message: " Welcome to Espark "
        }
    }

    changeMessage() {
        this.setState(
            {
                message : "Thanks For Feedback"
            }
        )
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <input type='text' multiple="true" />
                <button onClick={() => this.changeMessage()}>submit feedback</button>
            </div>
        )
    }
}
export default Wish 