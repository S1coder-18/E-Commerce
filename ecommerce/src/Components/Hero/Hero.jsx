import './Hero.css';
import hand_icon from '../../assets/hand.webp';
import arrow_icon from '../../assets/arrow.webp';
import men from '../../assets/men.webp';
function Hero(){

    return(
        <>
        <div className='hero'>
            <div className='hero-left'>
                <h2>Best Deals! Best Prices!</h2>
            
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt='' height="60px"/>
            </div>
            <p>Collections</p>
            <p>For EveryOne!</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='' height="60px" />
            </div>


            <div className='hero-right'>
                <img src={men} alt=''/>
            </div>


        </div>
        </>
    )
}
export default Hero;
