import {Link} from 'react-router-dom'
import "../scss/_home.scss";
import {useAuth} from '../services/AuthContext.jsx';
import {useEffect} from "react";
import supabase from "../services/supabase";
import {menuIcon, logoutIcon, loginIcon} from "../services/icons.jsx";

export default function Home() {
    const {user, logout, login, admin} = useAuth();


    useEffect(() => {
        const checkUserSession = async () => {
            try {
                // pobieranie sesji
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
    const renderLoginLink = () => {
        if (user && user.id === admin) {

            return (
                <>
                    <Link to="/" onClick={logout} className="custom_link">
                        <div className="icon-container">
                            {logoutIcon}
                            <div className="tooltip">LOGOUT</div>
                        </div>
                    </Link>
                    <Link to="/admin">
                        <div className="menu_button">
                            {menuIcon}
                            <div className="tooltip">MENU</div>
                        </div>
                    </Link>
                </>
            );

        } else if (user && user !== admin) {
            return (
                <Link to="/" onClick={logout} className="custom_link">
                    <div className="icon-container">
                        {logoutIcon}
                        <div className="tooltip">LOGOUT</div>
                    </div>

                </Link>
            );
        } else {

            return (
                <Link to="/login" className="custom_link">
                    <div className="icon-container ">
                        {loginIcon}
                        <div className="tooltip">LOG/REG</div>
                    </div>
                </Link>
            );
        }
    };


    return (
        <>
            <div className="main_page">
                {renderLoginLink()}
                <div className="logo-main"><img src="projekt.png" alt="projekt"/></div>
                <div className="main_page_menu"><span className="logo">AGATA TOFEL</span>
                    <nav className="main_page_menu_options">
                        <Link to="/ankieta" className="custom_link">
                            <div>ANKIETA</div>
                        </Link>
                        <Link to="/pytania" className="custom_link">
                            <div>PYTANIA WSTĘPNE</div>
                        </Link>
                        <Link to="/cv" className="custom_link">
                            <div>CV</div>
                        </Link>

                        <Link to="/kontact" className="custom_link">
                            <div>KONTAKT</div>

                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}
