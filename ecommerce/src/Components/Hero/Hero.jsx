import './Hero.css';
import hand_icon from '../../assets/hand.webp';
import arrow_icon from '../../assets/arrow_icon.png';
import men from '../../assets/men (1).webp';
function Hero(){

    return(
        <>
        <div className='hero'>
            <div className='hero-left'>
                <h2>Best Deals!   Best Prices! </h2>
            
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt='' height="60px"/>
            </div>
            <p>Collections</p>
            <p>For EveryOne!</p>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='' height="40px" />
            </div>
            </div>
            


            <div className='hero-right'>
                <img src={men} alt='' height='500px'/>
            </div>


        </div>
        </>
    )
}
export default Hero;
