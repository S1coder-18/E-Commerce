import './BredCrums.css';
import arrow_icon from '../../assets/arrow_icon.png';
function BredCrums(props){
    const {product} = props;
    return(
        <>
        <div className='bredCrums'>
            Home <img src={arrow_icon} alt='' height="10px" />
            Shop <img src={arrow_icon} alt='' height="10px" />
            {product.category}
            <img src={arrow_icon} alt='' height="10px" />
            {product.name}
            <img src={arrow_icon} alt='' height="10px" />
            
        </div>
        </>
    )
}

export default BredCrums;