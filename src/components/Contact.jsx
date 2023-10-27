import contact_foto from '../assets/contact.png'
import logo from '../assets/projekt-kontakt.png'
import insta from '../assets/insta.webp'
import {Link} from "react-router-dom";


export default function Contact(){

    return (
        <div className="container container_contact">
            <img src={logo} alt="logo" className="logo_contact"/>
            <img src={contact_foto} alt="architektka"/>
            <div className="contact_name"><p className="contact_text">Agata Tofel</p>
            <p className="contact_text">2.02.1986</p></div>
            <p className="contact_text">agatatofel@gmail.com</p>
            <p className="contact_text">+48 502 168 717</p>
            <a href="https://www.instagram.com/projekt_agata_tofel/"><img src={insta} alt="Instagram" className="insta_logo"/></a>
            <Link to="/" className="centered_image">
                <img src="home.png" alt="Home" className="home"/>
            </Link>
        </div>
    )
}