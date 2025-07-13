import './Newsletter.css';
function Newsletter(){

    return(
        <>
        <div className="newsletter">
            <h1>Get Best Offer In Your Email!</h1>
            <p>Subscribe to our news letter and stay updated!.</p>
            <div>
                <input type='email' placeholder='Enter Your Email Id'/>
                <button>Subscribe</button>
            </div>
        </div>
        </>
    )
}

export default Newsletter;