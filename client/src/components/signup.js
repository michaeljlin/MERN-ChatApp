import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('form submitted: ', this.state);

        // axios.post('http://localhost:9000/auth/signup', this.state).then(resp=>{
        //     console.log('sign up response is: ', resp);
        // }).catch((err)=>{
        //     console.log('sign up error is: ', err.message);
        // });
    }

    render(){
        const {email, username, password} = this.state;

        return(
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                        <input name="email" onChange={this.handleChange} value={email}/>
                    </div>
                    <div>
                        Username:
                        <input name="username" onChange={this.handleChange} value={username}/>
                    </div>
                    <div>
                        Password:
                        <input name="password" onChange={this.handleChange} value={password}/>
                    </div>

                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}

export default Signup;