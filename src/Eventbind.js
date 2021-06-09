import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello"
        }
    }

    clickHandler (){
        this.setState({
            message : "Bye !"
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                <button onClick = { () => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default Eventbind
