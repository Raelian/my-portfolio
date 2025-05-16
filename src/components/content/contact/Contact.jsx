import {FaEnvelope, FaPhone, FaLinkedin} from "react-icons/fa";
import Flag from 'react-world-flags';
import './Contact.scss';


const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact me</h2>
            <p>
                <span><FaEnvelope className="email"/>Email:</span> 
                <a href="mailto:mihai_bogdan_cristian@yahoo.ro">mihai_bogdan_cristian@yahoo.ro</a>
            </p>
            <p>
                <span><FaPhone className="mobile"/>Mobile:</span>
                <a href="tel:+40721985675">(<Flag code="RO" style={{width: 20, height: 15, marginLeft: 2, marginRight: 5}}/>+40) 721 985 675</a>
            </p>
            <p>
                <span><FaLinkedin className="linkedin"/>Linkedin: </span>
                <a href="https://www.linkedin.com/in/mihai-bogdan-cristian" target="_blank" rel="noopener nireferrer">www.linkedin.com/in/mihai-bogdan-cristian</a>
            </p>
        </div>
    )
}

export default Contact