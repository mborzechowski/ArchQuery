import supabase from "../services/supabase";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext.jsx';
import { useEffect } from 'react';
import { loginIcon, loginRegisterIcon} from "../services/icons.jsx";
import logo from "../assets/p_at-logo.webp"

export default function Login() {
    const navigation = useNavigate();
    const {login } = useAuth();

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (!error && data && data.session && data.session.user && data.session.user.id) {
                    login(data.session.user.id);
                }
            } catch (error) {
                console.error('Error checking user session:', error);
            }
        };
        checkUserSession();
    }, [login]);
    async function onSignIn(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;

        let { data, error } = await supabase.auth.signInWithPassword({
            email: formElements[0].value,
            password: formElements[1].value,
        });

        if (!error) {
            const { data: { user } } = await supabase.auth.getUser()
            console.log('user logged successfully');
            console.log(data);
            console.log("Login:",user);

            localStorage.setItem('jwtToken', data.session.access_token);

            login(data.user);
            navigation('/');
            return;
        }

        console.error('something went wrong', error);
    }

    return (
        <>
            <div><img src={logo} alt=""/></div>
            <div className="login_page login_box">
                <h2 className="heading_login_box">Zaloguj</h2>
                <form onSubmit={onSignIn}>
                    <div className="user_box">
                        <input className="user_box_input" type="text" required />
                            <label className="user_box_label">email</label>
                    </div>
                    <div className="user_box">
                        <input className="user_box_input" type="password" required />
                            <label className="user_box_label">hasło</label>
                    </div>
                    <button type="submit" className="login_box_button" href="#">
                        {loginIcon}
                    </button>
                        <Link to="/" className="home_button">
                            <img src="home.png" alt="Home" className="home"/>
                        </Link>
                    <Link to="/register" className="flip_icon">
                        {loginRegisterIcon}
                    </Link>
                </form>
            </div>
        </>
)
}