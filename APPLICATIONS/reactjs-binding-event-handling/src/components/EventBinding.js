import React from 'react';

class EventBinding extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            message : "welcome"
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            message: 'goodbye'
        })
    }

    render(){
        return(
                <div>
                    <h1>{this.state.message}</h1>
                   <button onClick={ () => this.clickHandler() } > CLICK ME </button>
                </div>
        );
    }

}

export default EventBinding;