import React, {Component} from 'react';
import axios from 'axios';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
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

        axios.post('http://localhost:9000/auth/signin', this.state).then(resp=>{
            console.log('sign in response is: ', resp);
        }).catch((err)=>{
            console.log('sign in error is: ', err.message);
        });
    }

    render(){
        const {email, password} = this.state;

        return(
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                        <input name="email" onChange={this.handleChange} value={email}/>
                    </div>
                    <div>
                        Password:
                        <input name="password" onChange={this.handleChange} value={password}/>
                    </div>

                    <button>Sign in</button>
                </form>
            </div>
        )
    }
}

export default Signin;