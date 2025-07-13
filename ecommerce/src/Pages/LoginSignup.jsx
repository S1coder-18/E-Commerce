import '../PagesStyle/LoginSignup.css';
function LoginSignup(){

    return(
        <>
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fileds">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your E-Mail" />
                    <input type="password" placeholder="Enter your password" />
                    </div>
                    <button>Continue</button>
                    <p className="loginsignup-login">
                        Already have an account ? <span>Login Here</span>
                    </p>
                    <div className="loginsignup-agree">
                        <input type="checkbox" name="" id="" />
                        <p>By Continuing, I agree to the terms of use & privacy policy</p>
                    </div>
            </div>
           
        </div>
        </>
    )
}

export default LoginSignup;