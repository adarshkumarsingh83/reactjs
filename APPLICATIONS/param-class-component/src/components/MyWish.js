import React from 'react'

class MyWish extends React.Component {
    render() {
        const {
            firstName, lastName
        } = this.props

        return (
            <div>
                <h1> Welcome to the Esprk {firstName} {lastName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default MyWish