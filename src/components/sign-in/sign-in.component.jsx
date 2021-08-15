import React, { Component } from 'react';

import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';

class SignIn extends Component {
    constructor(props) {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({email: '', password: ''})
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and passowrd</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label='email' 
                        handleChange={this.handleChange} 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        label='password' 
                        handleChange={this.handleChange} 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
                    
            </div>
        )
    }
}

export default SignIn;