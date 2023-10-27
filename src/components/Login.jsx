import supabase from "../services/supabase";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../services/AuthContext.jsx'
export default function Login() {
    const navigation = useNavigate();
    const { login } = useAuth();
    async function onSignIn(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;

        let { data, error } = await supabase.auth.signInWithPassword({
            email: formElements[0].value,
            password: formElements[1].value,
        });

        if (!error) {
            console.log('user logged successfully');
            console.log(data);

            login(data.user);
            navigation('/');
            return;
        }

        console.error('something went wrong', error);
    }
    return (
        <>

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 5 512 512" stroke="black" fill="black" id="login"><path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"></path><path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"></path></svg>
                    </button>
                        <Link to="/" className="home_button">
                            <img src="home.png" alt="Home" className="home"/>
                        </Link>
                    <Link to="/register" className="flip_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" id="flip"><g data-name="Layer 2"><path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19zm-.3-9.29a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z" data-name="flip-2"></path></g></svg>
                    </Link>
                </form>
            </div>
        </>
)
}