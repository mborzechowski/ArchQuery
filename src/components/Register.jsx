import supabase from "../services/supabase";
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import logo from "../assets/p_at-logo.webp";
import {loginIcon, loginRegisterIcon} from "../services/icons.jsx";

export default function Register() {
    const navigation = useNavigate();


    async function onRegister(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;

        let {data, error} = await supabase.auth.signUp({
            email: formElements[0].value,
            password: formElements[1].value,
        });

        if (!error) {
            console.log('Registration successful');
            console.log(data);
            navigation('/');
            return;
        }

        console.error('something went wrong', error);
    }

    return (
        <>
            <div><img src={logo} alt=""/></div>
            <div className="register_page register_box">
                <h2 className="heading_register_box">Zarejestruj</h2>
                <form onSubmit={onRegister}>
                    <div className="user_box">
                        <input className="user_box_input_register" type="text" required/>
                        <label className="user_box_label_register">email</label>
                    </div>
                    <div className="user_box">
                        <input className="user_box_input_register" type="password" required/>
                        <label className="user_box_label_register">hasło</label>
                    </div>
                    <button type="submit" className="register_box_button">
                        {loginIcon}
                        <div className="user_box_subtitle_login">login</div>
                    </button>
                    <Link to="/" className="home_button">
                        <img src="home.png" alt="Home" className="home"/>
                    </Link>
                    <Link to="/login" className="flip_icon">
                        {loginRegisterIcon}
                        <div className="user_box_subtitle_register">zaloguj</div>
                    </Link>
                </form>
            </div>
        </>
    )
}