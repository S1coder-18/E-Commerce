import './Footer.css';
import footer_icon from '../../assets/logo.webp';
import instagram_icon from '../../assets/instagram.png';
import facebook_icon from '../../assets/facebook.png';
import whatsapp_icon from '../../assets/whatsapp.png';
function Footer(){

    return(
        <>
        <div className="footer">
            <div className='footer-logo'>
                <img src={footer_icon} alt='' height="50px"/>
                <p>Shopify</p>
            </div>
            <ul className='footer-links'>
                <li>About</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Company</li>
                <li>Contact</li>
            </ul>

            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt='' height="30px"/>
                </div>
                <div className='footer-icons-container'>
                    <img src={facebook_icon} alt='' height="30px"/>
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsapp_icon} alt='' height="30px"/>
                 </div>   
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2025 - All Right Resrved</p>
            </div>
        </div>
        </>
    )
}

export default Footer;