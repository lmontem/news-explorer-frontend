import Popup from "../Popup/Popup"
import React, { useState } from 'react';
// import { Link, withRouter } from 'react-router-dom';

function RegisterPopup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        (
            <Popup
                isOpen={props.isOpen}
                onClose={props.onClose}
                // onSubmit={handleSubmit}
                name='sign-up' title='Sign up'
            >
                <div className="register" >
                    <label className='login__label'>Email</label>
                    <input className="login__input" placeholder="Enter your email" name="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label className='login__label'>Password</label>
                    <input className="login__input" placeholder="Enter password" name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <label className='login__label'>Username</label>
                    <input className="login__input" placeholder="Enter your username" name="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    <p className='login__error'>This email is not available</p>
                    <button type="submit" className="login__btn">Sign up</button>


                    <div className="login__signup">
                        <p>or
                <a href="signin" className="signup__link">Sign in</a>
                        </p>
                    </div>
                </div>
            </Popup>
        )
    )
}

export default RegisterPopup;