import React, { Component } from 'react'
import autoBind from 'react-autobind'

 class ClassClick extends Component {

    constructor(props) {
        super(props)
        autoBind(this); 
        this.state = {
            message: 'welcome to espark'
        }
    }

    onClassClick = () => {
        this.setState = (state => ({
            message: 'good bye from espark'
        }))
        console.log(this)
    }

    render() {
        return (
            <div>
                <br/>
                <div>{this.state.message}</div>
                <br/>
                <button onClick = { this.onClassClick }> Class Click </button>
            </div>
        )
    }
}
export default ClassClick
