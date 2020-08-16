import React from 'react'

const Es6Wish = (prop) => {
    console.log(prop)
    return (
        <div>
            <h1> Welcome to the Esprk {prop.firstName} {prop.lastName}</h1>
            {prop.children}
        </div>
    )
}

export default Es6Wish 