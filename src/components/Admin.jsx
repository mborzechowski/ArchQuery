import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import supabase from "../services/supabase";
import Questionnaire from "./Questionnaire.jsx";
import { useAuth } from '../services/AuthContext.jsx';

export default function Admin() {
    const [openModal, setOpenModal] = useState(null);
    const { user } = useAuth();
    console.log("user", user)
    // const [items, setItems] = useState([])
    //
    // useEffect(() => {
    //     getItems();
    // }, []);
    // async function getItems() {
    //     try {
    //         const {data, error} = await supabase.from('Query Items').select('*');
    //
    //         if (error) {
    //             throw error;
    //         }
    //         data && setItems(data);
    //     } catch (error) {
    //         console.error('Something went wrong', error);
    //     }
    // }
    // const CheckboxItems = ({data}) =>{
    //     const groupedByRoom = data.reduce((acc, current) => {
    //         const {room, type, name} = current;
    //         if (!acc[room]) {
    //             acc[room] = {};
    //         }
    //         if (!acc[room][type]) {
    //             acc[room][type] = [];
    //         }
    //         acc[room][type].push(name);
    //         return acc;
    //     }, {});
    //     return (
    //         <>
    //             {console.log(groupedByRoom)}
    //             {Object.entries(groupedByRoom).map(([name, room, type], index) => (
    //                 <div key={index}>
    //                     {name} + {room} + {type} + {index}
    //                 </div>
    //             ))}
    //         </>
    //     );
    // };



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
                                <button onClick={handleCloseModal}>X</button>
                                <Questionnaire/>
                            </div>
                        </div>
                    </>
                )}
                <div className="admin_button" onClick={() => handleButtonClick("question")}>PYTANIA OTWARTE</div>
                {openModal === "question" && (
                    <>
                        <div className="modal_overlay">
                            <div className="modal_content">
                                <button onClick={handleCloseModal}>X</button>
                            </div>
                        </div>
                    </>
                )}


                <Link to="/" className="centered_image"><img src="home.png" alt="Home" className="home"/></Link>
            </div>
        </>
    )
}


