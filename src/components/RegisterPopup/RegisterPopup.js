import Popup from "../Popup/Popup"

function RegisterPopup(props) {   

    return (
        (
            <Popup
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={props.onSubmit}
                name='sign-up' title='Sign up'
            >
                <div className="login" >
                    <label className='login__label'>Email</label>
                    <input className="login__input" placeholder="Enter your email" name="email" type="email"  required value={props.values.email} onChange={props.handleFormChange} />
                    <label className='login__label'>Password</label>
                    <input className="login__input" placeholder="Enter password" name="password" type="password" minLength={8} required value={props.values.password} onChange={props.handleFormChange} />
                    <label className='login__label'>Username</label>
                    <input className="login__input" placeholder="Enter your username" name="username" type="text" minLength={2} required value={props.values.username} onChange={props.handleFormChange} />
                    <span className='login__error'>{props.duplicateEmailMessage && 'Duplicate email'}</span>
                    <button type="submit" className={props.isValid ? "login__btn" : "login__btn_disabled"}>Sign up</button>


                    <div className="login__signup">
                        <p className='login__or'>or
                <span className="login__link" onClick={props.onSigninClick}>Sign in</span>
                        </p>
                    </div>
                </div>
            </Popup>
        )
    )
}

export default RegisterPopup;