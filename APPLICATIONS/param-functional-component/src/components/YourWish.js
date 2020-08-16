import React from 'react'

const YourWish = props => {

    const { firstName, lastName } = props
    return (
        <div>
            <h1> Welcome to the Esprk {firstName} {lastName}</h1>
        </div>
    )
}

export default YourWish