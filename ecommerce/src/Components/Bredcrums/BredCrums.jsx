import './BredCrums.css';
import arrow_icon from '../../assets/arrow_icon.png';
function BredCrums(props){
    const {product} = props;
    return(
        <>
        <div className='bredCrums'>
            <span>Home</span> <img src={arrow_icon} alt='' height="10px" />
           <span> Shop </span><img src={arrow_icon} alt='' height="10px" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt='' height="10px" />
            <span className='active'>{product.name}</span>
            <img src={arrow_icon} alt='' height="10px" />
            
        </div>
        </>
    )
}

export default BredCrums;