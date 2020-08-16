import React, { Component } from 'react'

function FunctionClick() {

    function onClickFunction() {
        console.log('onClickFunction()')
    }

    return (
        <div>
            <button onClick={onClickFunction}> FunctionClick Me </button>
        </div>
    )
}

export default FunctionClick
