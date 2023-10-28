import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import supabase from "../services/supabase";

import closeButton from "../assets/x.png"

export default function Admin() {
    const [openModal, setOpenModal] = useState(null);

    const [items, setItems] = useState([]);
    const [questions, setQuestions] = useState([])
    const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" id="delete"
                            stroke="black" fill="black">
        <path d="M18.3,56h23.6c2.7,0,4.8-2.2,4.8-4.8V18.7h2.1c0.6,0,1-0.4,1-1v-2.3c0-2.1-1.7-3.7-3.7-3.7h-8.5V9.1c0-1.7-1.4-3.1-3.1-3.1
	h-8.9c-1.7,0-3.1,1.4-3.1,3.1v2.6H14c-2.1,0-3.7,1.7-3.7,3.7v2.3c0,0.6,0.4,1,1,1h2.1v32.5C13.4,53.8,15.6,56,18.3,56z M44.7,51.2
	c0,1.6-1.3,2.8-2.8,2.8H18.3c-1.6,0-2.8-1.3-2.8-2.8V18.7h29.3V51.2z M24.5,9.1C24.5,8.5,25,8,25.6,8h8.9c0.6,0,1.1,0.5,1.1,1.1v2.6
	h-11V9.1z M12.3,15.4c0-1,0.8-1.7,1.7-1.7h32c1,0,1.7,0.8,1.7,1.7v1.3H12.3V15.4z"></path>
        <path
            d="M37.9 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C36.9 48.8 37.4 49.2 37.9 49.2zM30.1 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C29.1 48.8 29.5 49.2 30.1 49.2zM22.2 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C21.2 48.8 21.6 49.2 22.2 49.2z"></path>
    </svg>

    useEffect(() => {
        getItems();
        getQuestions()

        console.log("question", questions)
    }, [openModal]);

    const handleDelete = async (itemId, query) => {
        try {
            const {error} = await supabase
                .from(query)
                .delete()
                .eq('id', itemId);

            if (!error) {
                setItems(prevItems => prevItems.filter(item => item.id !== itemId));
                setQuestions(prevItems => prevItems.filter(item => item.id !== itemId));
            } else {
                console.error('Something went wrong while deleting item', error);
            }
        } catch (error) {
            console.error('Something went wrong while deleting item', error);
        }
    };


    const getItems = async () => {
        try {
            const {data, error} = await supabase.from('Query Items').select('*');
            if (error) {
                throw error;
            }
            data && setItems(data);
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    const getQuestions = async () => {
        try {
            const { data, error } = await supabase.from('questions').select('*');
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

    const handleButtonClick = (modalId) => {
        setOpenModal(modalId);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
    };

    return (
        <>
            <div className=" container_admin">
                <div className="admin_button" onClick={() => handleButtonClick("answers")}>ZAPISANE ODPOWIEDZI</div>
                {openModal === "answers" && (
                    <>
                        <div className="modal_overlay">
                            <div className="modal_content">
                                <button onClick={handleCloseModal}>X</button>

                            </div>
                        </div>
                    </>
                )}
                <div className="admin_button" onClick={() => handleButtonClick("checkbox")}>POZYCJE W ANKIECIE</div>
                {openModal === "checkbox" && (
                    <>
                        <div className="modal_overlay">
                            <div className="modal_content">
                                <button onClick={handleCloseModal} className="close_btn"><img src={closeButton} alt="X"
                                                                                              className="close_btn"/>
                                </button>
                                <table className="items_table">
                                    <thead>
                                    <tr>
                                        <th>nazwa</th>
                                        <th>pokój</th>
                                        <th>przedmiot</th>
                                        <th>ikona</th>
                                        <th>usuń</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        items.map(item => {
                                            const image = `${item.name}.png`;

                                            return (
                                                <tr key={item.created_at}>
                                                    <td>{item.name}</td>
                                                    <td> {item.room}</td>
                                                    <td> {item.type}</td>
                                                    <td><img src={image} alt={item.name}/></td>
                                                    <td><button className="delete_btn" onClick={() => handleDelete(item.id, 'Query Items' )}>{deleteIcon}</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
                <div className="admin_button" onClick={() => handleButtonClick("question")}>PYTANIA OTWARTE</div>
                {openModal === "question" && (
                    <>
                        <div className="modal_overlay">
                            <div className="modal_content">
                                <button onClick={handleCloseModal} className="close_btn"><img src={closeButton} alt="X"
                                                                                              className="close_btn"/>
                                </button>
                                <table className="question_table">
                                    <thead>
                                    <tr>
                                        <th>no.</th>
                                        <th>pytanie</th>
                                        <th>usuń</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        questions.map((question, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index +1}</td>
                                                    <td>{question.question}</td>
                                                    <td><button className="delete_btn" onClick={() => handleDelete(question.id, "questions" )}>{deleteIcon}</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}


                <Link to="/" className="centered_image"><img src="home.png" alt="Home" className="home"/></Link>
            </div>
        </>
    )
}


