import {Link} from 'react-router-dom'
import Footer from "./Footer.jsx";
import {useEffect, useState} from 'react';
import supabase from "../services/supabase.js";

export default function Questions() {
    const [questions, setQuestions] = useState([])
    const [userName, setUserName] = useState('');
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        getQuestions();
        console.log("questions", questions)
    }, []);
    const getQuestions = async () => {

        try {
            const {data, error} = await supabase.from('questions').select('*');
            if (error) {
                throw error;
            }

            const transformedData = data.map(item => ({
                id: item.id,
                question: item.question,
            }));

            console.log("transform", transformedData);
            data && setQuestions(transformedData);
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer,
        }));

    };

    const handleSendButtonClick = async () => {
        try {

            if (!userName.trim()) {
                alert('Proszę podpisz się');
                return;
            }
            const answersToSave = {
                user_name: userName,
                answer: {},
            };

            questions.forEach(question => {
                answersToSave.answer[question.id] = userAnswers[question.id] || "";
            });
            const {data, error} = await supabase.from('answer_questions').insert([answersToSave]);

            if (error) {
                throw error;
            }

            setUserName('');
            setUserAnswers({});
        } catch (error) {
            console.error('Coś poszło nie tak:', error);
        }
    };

    return (
        <>
            <div className="container container_questions">
                <img src="logo-mini.png" alt="LOGO" className="logo_mini"/>
                <div className="questions_list_title"><p>pytania wstępne</p><button
                    className="btn_questions_top" onClick={handleSendButtonClick}>wyślij </button></div>
                <input
                    className="input_name_question"
                    type="text"
                    placeholder="nazwa / imię"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <ol className="questions_list">
                    {
                        questions.map((question, index) => {
                            return (
                                <li className="single_question" key={index}>
                                    <input
                                        className="input_questions"
                                        type="text"
                                        placeholder=" "
                                        value={userAnswers[index]}
                                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                    />
                                    <label className="label_questions">{question.question}</label>
                                </li>
                            )

                        })
                    }
                </ol>
                <Link to="/" className="centered_image">
                    <img src="home.png" alt="Home" className="home"/>
                </Link>
                <Footer/>
            </div>
        </>
    )
}

