import React from 'react'

function Wish(prop) {
    console.log(prop)
    return (
        <div>
            <h1> Welcome to the Esprk {prop.firstName} {prop.lastName}</h1>
            {prop.children}
        </div>)
}

export default Wish