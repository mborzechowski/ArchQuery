import {Link} from 'react-router-dom'
import "../scss/_home.scss";
import {useAuth} from '../services/AuthContext.jsx';
import {useEffect} from "react";
import supabase from "../services/supabase";
export default function Home() {
    const {user, logout, login, admin} = useAuth();


    useEffect(() => {
        const checkUserSession = async () => {
            try {
                // pobieranie sesji
                const { data, error } = await supabase.auth.getSession();
                console.log("data", data)
                if (!error && data) {
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 5 512 512"
                                 stroke="black" fill="black"
                                 id="logout" className="login_icon">
                                <path
                                    d="m366.863 323.883 22.627 22.627L480 256l-90.51-90.51-22.628 22.628L418.745 240H192v32h226.745z"></path>
                                <path
                                    d="M391.491 391.766C355.229 428.029 307.018 448 255.736 448c-51.287 0-99.506-19.971-135.772-56.235C83.697 355.501 64 307.285 64 256c0-51.281 19.697-99.495 55.965-135.761C156.232 83.973 204.45 64 255.736 64c51.279 0 99.491 19.973 135.755 56.238a196.044 196.044 0 0 1 7.333 7.762h40.731c-40.474-58.028-107.709-96-183.819-96C132.021 32 32 132.298 32 256c0 123.715 100.021 224 223.736 224 76.112 0 143.35-37.97 183.822-96h-40.73a194.792 194.792 0 0 1-7.337 7.766z"></path>
                            </svg>
                            <div className="tooltip">LOGOUT</div>
                        </div>
                    </Link>
                    <Link to="/admin" className="menu_button">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="menu" stroke="black"
                                 fill="black">
                                <path
                                    d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
                            </svg>
                        </div>
                    </Link>
                </>
            );

        } else if (user && user !== admin) {
            return (
                <Link to="/" onClick={logout} className="custom_link">
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 5 512 512"
                             stroke="black" fill="black"
                             id="logout" className="login_icon">
                            <path
                                d="m366.863 323.883 22.627 22.627L480 256l-90.51-90.51-22.628 22.628L418.745 240H192v32h226.745z"></path>
                            <path
                                d="M391.491 391.766C355.229 428.029 307.018 448 255.736 448c-51.287 0-99.506-19.971-135.772-56.235C83.697 355.501 64 307.285 64 256c0-51.281 19.697-99.495 55.965-135.761C156.232 83.973 204.45 64 255.736 64c51.279 0 99.491 19.973 135.755 56.238a196.044 196.044 0 0 1 7.333 7.762h40.731c-40.474-58.028-107.709-96-183.819-96C132.021 32 32 132.298 32 256c0 123.715 100.021 224 223.736 224 76.112 0 143.35-37.97 183.822-96h-40.73a194.792 194.792 0 0 1-7.337 7.766z"></path>
                        </svg>
                        <div className="tooltip">LOGOUT</div>
                    </div>

                </Link>
            );
        } else {

            return (
                <Link to="/login" className="custom_link">
                    <div className="icon-container">

                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 5 512 512"
                             stroke="black" fill="black" id="login" className="login_icon">
                            <path
                                d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"></path>
                            <path
                                d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"></path>
                        </svg>
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
                <img src="projekt.png" alt="projekt"/>
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
