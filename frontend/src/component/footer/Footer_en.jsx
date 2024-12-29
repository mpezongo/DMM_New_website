import { Link } from "react-router-dom"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.scss"

function Footer() {
    return(
        
        <div className="footer">
            <hr />
            <div className="tel">
                <div className="footer-content">
                    <div className="top">
                        <div><Link to="https://www.facebook.com/profile.php?id=100091824890051" className="middle-content"><FacebookOutlinedIcon /></Link></div>
                        <div><Link to="https://www.instagram.com/dev_mastermind/" className="middle-content"><InstagramIcon /></Link></div>
                        <div><Link to="https://www.linkedin.com/company/devmastermind/" className="middle-content"><LinkedInIcon /></Link></div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <span>DevMasterMind</span>
                            <p>2023 © DMM <br />
                            All rights reserved.
                            </p>
                        </div>
                        <div className="right">
                            <div><Link to="/politiques_de_confidentialité" className="middle-content">Privacy Policy</Link></div>
                            <div><Link to="/conditions_d'utilisation" className="middle-content">Terms of Use</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ordinateur">
                <div className="footer-content">
                    <div className="left">
                        <span>DevMasterMind</span>
                        <p>2023 © DMM <br />
                        All rights reserved.
                        </p>
                    </div>
                    <div className="right">
                        <div><Link to="/" className="middle-content">Home</Link></div>
                        <div><Link to="/tarifs" className="middle-content">Prices</Link></div>
                        <div><Link to="/about-us" className="middle-content">About us</Link></div>
                        <div><Link to="/contact" className="middle-content">Contact</Link></div>
                    </div>
                    <div className="right">
                    <div><Link to="https://www.facebook.com/profile.php?id=100091824890051" className="middle-content">Facebook</Link></div>
                        <div><Link to="https://www.instagram.com/dev_mastermind/" className="middle-content">Instagram</Link></div>
                        <div><Link to="https://www.linkedin.com/company/devmastermind/" className="middle-content">Linkedin</Link></div>
                    </div>
                    <div className="right">
                        <div><Link to="/politiques_de_confidentialité" className="middle-content">Privacy Policy</Link></div>
                        <div><Link to="/conditions_d'utilisation" className="middle-content">Terms of Use</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;