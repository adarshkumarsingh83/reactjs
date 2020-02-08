import React from 'react'

class Wish extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1> Welcome to the Esprk {this.props.firstName} {this.props.lastName}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Wish