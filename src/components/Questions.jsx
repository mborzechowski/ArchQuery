import {Link} from 'react-router-dom'
import Footer from "./Footer.jsx";
import {useEffect, useState} from 'react';
import supabase from "../services/supabase.js";

export default function Questions() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getQuestions();
    }, []);
    const getQuestions = async () => {
        try {
            const {data, error} = await supabase.from('questions').select('question');

            if (error) {
                throw error;
            }

            data && setQuestions(data);
            if (data) {
                setQuestions(Object.values(data).map(entry => entry.question));
            }

        } catch (error) {
            console.error('Something went wrong', error);
        }
    };
    const GenerateQuestions = function ({data}) {
        if (!Array.isArray(data) || data.length === 0) {
            return null;
        }

        return data.map((question, index) => (
            <li className="single_question" key={index}>
                <input className="input_questions" type="text" placeholder=" "/>
                <label className="label_questions">{question}</label>
            </li>
        ));
    }

    return (
        <>
            <div className="container container_questions">
                <img src="logo-mini.png" alt="LOGO" className="logo_mini"/>
                <span className="questions_list_title">pytania wstępne</span>
                <ol className="questions_list">
                    <GenerateQuestions data={questions}/>
                </ol>
                <Link to="/" className="centered_image">
                    <img src="home.png" alt="Home" className="home"/>
                </Link>
                <Footer/>
            </div>
        </>
    )
}

