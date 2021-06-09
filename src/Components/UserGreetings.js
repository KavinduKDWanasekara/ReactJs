import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userLoggedIn : false
        }
    }
    
    render() {

        return this.state.userLoggedIn && <div>Welcome Kavindu</div>

        // return(
        //     this.state.userLoggedIn ?
        //     <div>Welcome Kavindu</div> : <div>Welcome Guest</div>
        // )

        // let message
        // if (this.state.userLoggedIn) {
        //     message = <div>Welcome Kavindu</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if (this.state.userLoggedIn){
        //     return(
        //         <div>Welcome Kavindu</div>
        //     )
        // } else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreetings
