import {Link} from 'react-router-dom'

export default function Login() {

    return (
        <>
            <div className="login_page login_box">
                <h2 className="heading_login_box"></h2>
                <form>
                    <div className="user_box">
                        <input className="user_box_input" type="text" required />
                            <label className="user_box_label">email</label>
                    </div>
                    <div className="user_box">
                        <input className="user_box_input" type="password" required />
                            <label className="user_box_label">hasło</label>
                    </div>
                    <button type="submit" className="login_box_button" href="#">
                        LOG
                    </button>
                </form>
            </div>
        </>
)
}