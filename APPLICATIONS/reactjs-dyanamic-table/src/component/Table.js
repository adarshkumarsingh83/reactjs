import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            data: [
                { key1: "1value", key2: "2value", key3: "3value", key4: "4value" }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
            console.log("header index" + index);
            return <th key={(index)}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.data.map((data, index) => {
            return (
                Object.keys(data).map(key => {
                    return <tr key={key} >
                        <td>{key}</td><td>{data[key]}</td>
                    </tr>
                })
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='data'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table //exporting a component make it reusable and this is the beauty of react