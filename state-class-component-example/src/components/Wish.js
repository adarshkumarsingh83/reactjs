import React from 'react'

class Wish extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementByOneToState() {
        this.setState(
            {
                count: this.state.count + 1
            }, () => {
                console.log('incrementByOneToState()', this.state.count)
            }
        )
    }

    decrementByOneToState() {
        this.setState(
            {
                count: this.state.count - 1
            }, () => {
                console.log('decrementByOneToState() ', this.state.count)
            }
        )
    }

    resetCounter() {
        this.setState(
            {
                count: 0
            }, () => {
                console.log('resetCounter()', this.state.count)
            }
        )
    }

    incrementByFive() {
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
    }

    incrementByOne() {
        this.setState(
            prevState => ({
                count: prevState.count + 1
            }), () => {
                console.log('incrementByOne()', this.state.count)
            }
        )
    }

    decrementByFive() {
        this.decrementByOne()
        this.decrementByOne()
        this.decrementByOne()
        this.decrementByOne()
        this.decrementByOne()
    }

    decrementByOne() {
        this.setState(
            prevState => ({
                count: prevState.count - 1
            }), () => {
                console.log('decrementByOne()', this.state.count)
            }
        )
    }


    render() {
        return (
            <div>
                <h1>Welcome to the Espark </h1>
                <br />
                <br />
                <h2>{this.state.count}</h2>
                <br />
                <br />
                <button onClick={() => this.incrementByOneToState()} >increment by 1</button>
                &nbsp;
                <button onClick={() => this.decrementByOneToState()} > decrement by 1</button>
                <br />
                <button onClick={() => this.incrementByFive()} >increment by 5</button>
                &nbsp;
                <button onClick={() => this.decrementByFive()} > decrement by 5</button>
                <br />
                <br />
                <button onClick={() => this.resetCounter()} > reset counter</button>
            </div>
        )
    }
}

export default Wish