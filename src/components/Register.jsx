import supabase from "../services/supabase";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {useState} from "react";

export default function Register(){
    const navigation = useNavigate();


    async function onRegister(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;
        console.log(formElements);

        let { data, error } = await supabase.auth.signUp({
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

            <div className="register_page register_box">
                <h2 className="heading_register_box">Zarejestruj</h2>
                <form onSubmit={onRegister}>
                    <div className="user_box">
                        <input className="user_box_input_register" type="text" required />
                        <label className="user_box_label_register">email</label>
                    </div>
                    <div className="user_box">
                        <input className="user_box_input_register" type="password" required />
                        <label className="user_box_label_register">hasło</label>
                    </div>
                    <button type="submit" className="register_box_button" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 5 512 512" stroke="black" fill="black" id="login"><path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"></path><path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"></path></svg>
                    </button>
                    <Link to="/" className="home_button">
                        <img src="home.png" alt="Home" className="home"/>
                    </Link>
                </form>
            </div>
        </>
    )
}