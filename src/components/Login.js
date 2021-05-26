import React, { Component } from 'react'

class Login extends Component {
    render(){
        return(
            <div>
            <p>Hello</p>
                <form>
                    <label>
                        Email:
                        <input type='text' name='email'/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Login
