import './Offers.css';
import girl from '../../assets/exclu.webp';
function Offers(){

    return(
        <>
        <div className="offers">
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY BEST SELLERS PRODUCTS!.</p>
                <button>Check Now</button>
            </div>
            <div className='offers-right'>
                <img src={girl} alt='' />
            </div>

        </div>
        </>
    )
}

export default Offers;