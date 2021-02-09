import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup'
import Login from './Login'


class Navbar extends React.Component {
    state = {
        displayLogin:false,
        displaySignup:false
    }
    signUpHandler = ()=>{
        this.setState({
            displaySignup : true,
            displayLogin: false
        })
    }
    logingHandler = ()=>{
        this.setState({
            displayLogin: true,
            displaySignup:false
        })
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-content">
                    <div className="logo">SOLAR X</div>
                    <div>

                        <a onClick={this.logingHandler}>Login</a>
                        <a onClick={this.signUpHandler}>Register</a>
                        
                        

                    </div>
                </div>

                {this.state.displaySignup&& <Signup></Signup>}
                {this.state.displayLogin && <Login updateCurrentUser={this.props.updateCurrentUser}></Login>}
            </div>
        );
    }
}

export default Navbar;
