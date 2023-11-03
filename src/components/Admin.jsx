import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState, useRef} from "react";
import supabase from "../services/supabase";
import closeButton from "../assets/x.png"
import Questionnaire from "./Questionnaire.jsx";
import {deleteIcon, saveIcon, resizeUpIcon, resizeDownIcon} from "../services/icons.jsx";
import {useAuth} from '../services/AuthContext.jsx';

export default function Admin() {
    const [openModal, setOpenModal] = useState(null);
    const [openModalAdd, setOpenModalAdd] = useState(null);
    const [items, setItems] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [otherRoom, setOtherRoom] = useState('...');
    const [otherType, setOtherType] = useState('...');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const inputRoomRef = useRef(null);
    const inputTypeRef = useRef(null);
    const [addQuestion, setAddQuestion] = useState('');
    const [queryAnswers, setQueryAnswers] = useState([]);
    const [questionsAnswers, setQuestionsAnswers] = useState([]);
    const {user, admin, login} = useAuth();
    const navigation = useNavigate();
    const [resize, setResize] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        getItems();
        getQuestions()
        getRooms()
        getType()
        getQueryAnswers()
        getQuestionsAnswers()
    }, [openModal, openModalAdd]);

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                // pobieranie sesji
                const {data, error} = await supabase.auth.getSession();
                console.log("data", data)
                if (!error && data && data.session && data.session.user && data.session.user.id) {
                    login(data.session.user.id);
                }
            } catch (error) {
                console.error('Error checking user session:', error);
            }
        };

        checkUserSession();
    }, [login]);

    // Helper functions
    const handleDelete = async (itemId, query) => {
        try {
            const {error} = await supabase
                .from(query)
                .delete()
                .eq('id', itemId);

            if (!error) {
                setItems(prevItems => prevItems.filter(item => item.id !== itemId));
                setQuestions(prevItems => prevItems.filter(item => item.id !== itemId));
                setQueryAnswers(prevItems => prevItems.filter(item => item.id !== itemId));
                setQuestionsAnswers(prevItems => prevItems.filter(item => item.id !== itemId));
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
            const {data, error} = await supabase.from('questions').select('*');
            if (error) {
                throw error;
            }

            const transformedData = data.map(item => ({
                id: item.id,
                question: item.question,
            }));

            data && setQuestions(transformedData);
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    const getRooms = async () => {
        try {
            let {data, error} = await supabase.from('Query Items').select('room');
            if (error) {
                throw error;
            }
            const uniqueRooms = [...new Set(data.map(item => item.room))];
            data && setRooms(uniqueRooms)
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    const getType = async () => {
        try {
            let {data, error} = await supabase.from('Query Items').select('type');
            if (error) {
                throw error;
            }
            const uniqueTypes = [...new Set(data.map(item => item.type))];
            data && setTypes(uniqueTypes)
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    const getQueryAnswers = async () => {
        try {
            let {data, error} = await supabase.from('answers_questionnaire').select('*');
            if (error) {
                throw error;
            }
            data && setQueryAnswers(data)

        } catch (error) {
            console.error("something went wrong", error)
        }
    }
    const getQuestionsAnswers = async () => {
        try {
            let {data, error} = await supabase.from('answer_questions').select('*');
            if (error) {
                throw error;
            }
            data && setQuestionsAnswers(data)

        } catch (error) {
            console.error("something went wrong", error)
        }
    }
    const handleButtonClick = (modalId) => {
        setOpenModal(modalId);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
        setOpenModalAdd(null);
    };

    const handleCloseAddModal = () => {
        setOpenModalAdd(null);
        setResize(true)
    };
    const handleAddButton = (modalId) => {
        setOpenModalAdd(modalId);
    };

    const handleOtherRoom = () => {
        setSelectedOption(inputRoomRef.current.value);
        setOtherRoom(inputRoomRef.current.value);

    }
    const handleOtherType = () => {
        setType(inputTypeRef.current.value);
        setOtherType(inputTypeRef.current.value);
    }
    const handleSaveItemButton = async () => {
        try {

            const itemsId = items.map(item => item.id)
            const highestId = Math.max(...itemsId)
            const roomToSave = selectedOption === otherRoom ? inputRoomRef.current.value : selectedOption;
            const typeToSave = type === otherType ? inputTypeRef.current.value : type;

            const dataToSave = {
                id: highestId + 1,
                name: name,
                type: typeToSave,
                room: roomToSave,
            };

            const fileInput = document.getElementById('file-input');
            console.log("input", fileInput)
            if (fileInput) {
                const iconFile = fileInput.files[0];
                const fileName = name
                console.log("icon", iconFile)
                console.log("name", fileName)

                if (iconFile) {
                    const {data: uploadData, error: uploadError} = await supabase
                        .storage.from('avatars')
                        .upload(`icons/${fileName}.png`, iconFile);


                    if (uploadError) {
                        throw uploadError;
                    }

                    console.log('Icon uploaded successfully:', uploadData);

                } else {
                    console.error('No file.');
                }
            } else {
                console.error('Input with file-input do not exist');
            }


            const {data, error} = await supabase
                .from('Query Items')
                .insert([dataToSave])
                .select();

            if (error) {
                throw error;
            }

            setOpenModalAdd(null);
        } catch (error) {
            console.error('Coś poszło nie tak:', error);
        }
    };

    const handleSaveQuestionButton = async () => {
        try {

            const questionsId = questions.map(item => item.id)
            const highestId = Math.max(...questionsId)


            const dataToSave = {
                id: highestId + 1,
                question: addQuestion,
            };

            const {data, error} = await supabase
                .from('questions')
                .insert([dataToSave])
                .select()

            if (error) {
                throw error;
            }

            setOpenModalAdd(null)
        } catch (error) {
            console.error('Coś poszło nie tak:', error);
        }
    }

    function imageExists(image) {
        try {
            const img = new Image();
            img.src = image;
            img.onerror = () => false;
            return img.complete;
        } catch (error) {
            return false;
        }
    }

    const handleChangeSize = () => {
        setResize(!resize)
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    // Rendering functions

    const renderAnswersModalContent = () => {
        return (
            <>
                <div className="modal_overlay">
                    <div className="modal_content">
                        <div className="modal_buttons">
                            <button onClick={handleCloseModal} className="close_btn"><img src={closeButton}
                                                                                          alt="X"
                                                                                          className="close_btn"/>
                            </button>
                        </div>
                        <div className="answers_modal_content">
                            <p className="answers_modal_titles">odpowiedzi z ankiet</p>
                            <div className="answers_modal">

                                {
                                    queryAnswers.map(answer => {

                                        return (
                                            <>
                                                <div className="single_answer"
                                                     onClick={() => handleAddButton(answer.id)}
                                                     key={answer.id}><p>{answer.user_name}</p>
                                                    <p>{(answer.created_at).slice(0, 10)}</p></div>
                                                {openModalAdd === answer.id && (
                                                    <>
                                                        <div
                                                            className={resize ? "add_item_modal questionnaire" : "add_item_modal_large questionnaire"}>
                                                            <div className="modal_buttons">
                                                                <button onClick={handleCloseAddModal}
                                                                        className="close_btn_add_modal">
                                                                    <img
                                                                        src={closeButton}
                                                                        alt="X"
                                                                        className="close_btn"/>
                                                                </button>
                                                                <button onClick={handleChangeSize}
                                                                        className="resize_btn">
                                                                    {resize ? resizeUpIcon : resizeDownIcon}
                                                                </button>
                                                                <button className="delete_answer"
                                                                        onClick={() => handleDelete(answer.id, 'answers_questionnaire')}>{deleteIcon}</button>
                                                                <div className="form_top">{answer.user_name}</div>
                                                            </div>
                                                            <Questionnaire isAdminPage={true}
                                                                           queryAnswers={answer}/>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <p className="answers_modal_titles">odpowiedzi na pytania otwarte</p>
                            <div className="answers_modal">

                                {
                                    questionsAnswers.map(answer => {
                                        return (
                                            <>
                                                <div className="single_answer"
                                                     onClick={() => handleAddButton(answer.id)}
                                                     key={answer.id}><p>{answer.user_name}</p>
                                                    <p>{(answer.created_at).slice(0, 10)}</p></div>
                                                {openModalAdd === answer.id && (
                                                    <>
                                                        <div
                                                            className={resize ? "add_item_modal questionnaire" : "add_item_modal_large questionnaire"}>
                                                            <div className="modal_buttons">
                                                                <button onClick={handleCloseAddModal}
                                                                        className="close_btn_add_modal">
                                                                    <img
                                                                        src={closeButton}
                                                                        alt="X"
                                                                        className="close_btn"/>
                                                                </button>

                                                                <button onClick={handleChangeSize}
                                                                        className="resize_btn">
                                                                    {resize ? resizeUpIcon : resizeDownIcon}
                                                                </button>
                                                                <button className="delete_answer"
                                                                        onClick={() => handleDelete(answer.id, 'answer_questions')}>{deleteIcon}</button>
                                                            </div>
                                                            <table className="question_table">
                                                                <thead>{answer.user_name}
                                                                <tr>
                                                                    <th>no.</th>
                                                                    <th>pytanie</th>
                                                                    <th>odpowiedź</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {
                                                                    Object.keys(answer.answer).map((key, index) => (
                                                                        <tr key={index}>
                                                                            <th>{index + 1}</th>
                                                                            <th>{key}</th>
                                                                            <th>{answer.answer[key]}</th>
                                                                        </tr>
                                                                    ))
                                                                }

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };

    const renderQueryItemsList = () => {
        return (
            <>
                <div className="modal_overlay">
                    <div className="modal_content">
                        <div className="modal_buttons">
                            <button onClick={handleCloseModal} className="close_btn"><img src={closeButton}
                                                                                          alt="X"
                                                                                          className="close_btn"/>
                            </button>
                            <button onClick={() => handleAddButton("add_item")} className="close_btn"><img
                                src={closeButton}
                                alt="X"
                                className="add_btn"/>
                            </button>
                        </div>
                        {openModalAdd === "add_item" && (
                            <>
                                <div className="add_item_modal">
                                    <div className="modal_buttons">
                                        <button onClick={handleCloseAddModal} className="close_btn_add_modal">
                                            <img
                                                src={closeButton}
                                                alt="X"
                                                className="close_btn"/>
                                        </button>
                                        <button onClick={handleSaveItemButton}
                                                className="save_btn">{saveIcon}</button>
                                    </div>
                                    <table className="items_table">
                                        <thead>
                                        <tr>
                                            <th>nazwa</th>
                                            <th>pokój</th>
                                            <th>typ</th>
                                            <th>ikona</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><input type="text" placeholder="..." defaultValue={name}
                                                       className="input_new_item_name"
                                                       onChange={(e) => setName(e.target.value)}/></td>
                                            <td><select name="pokój" id="room" value={selectedOption}
                                                        className="input_new_item_select"
                                                        onChange={(e) => setSelectedOption(e.target.value)}>
                                                {
                                                    rooms.map(room => {
                                                        return (
                                                            <option key={room}>{room}</option>
                                                        )
                                                    })
                                                }
                                                <option>{otherRoom}</option>
                                            </select>
                                                {
                                                    selectedOption === otherRoom && (
                                                        <>
                                                            <input ref={inputRoomRef} className="input_new_item_select"/>
                                                            <button onClick={handleOtherRoom}
                                                                    className="input_new_item_button_ok">OK
                                                            </button>
                                                        </>
                                                    )
                                                }
                                            </td>
                                            <td><select name="typ" id="" value={type} className="input_new_item_select"
                                                        onChange={(e) => setType(e.target.value)}>
                                                {
                                                    types.map(type => {
                                                        return (
                                                            <option key={type}>{type}</option>
                                                        )
                                                    })
                                                }
                                                <option>{otherType}</option>
                                            </select>{type === otherType && (
                                                <>
                                                    <input ref={inputTypeRef} className="input_new_item_select"/>
                                                    <button onClick={handleOtherType}
                                                            className="input_new_item_button_ok">OK
                                                    </button>
                                                </>
                                            )}
                                            </td>
                                            <td>
                                                <label className="input_new_item_file">
                                                    Wybierz plik
                                                    <input type="file" id="file-input" onChange={handleFileChange}/>
                                                </label>
                                                <span className="custom-file-label">
                                                {selectedFile ? selectedFile.name : ' '}
                                                </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )

                        }
                        <table className="items_table">
                            <thead>
                            <tr>
                                <th>nazwa</th>
                                <th>pokój</th>
                                <th>typ</th>
                                <th>ikona</th>
                                <th>usuń</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                items.map(item => {
                                    const image = `${item.name}.png`;
                                    const tempImage = "question.png";

                                    return (
                                        <tr key={item.created_at}>
                                            <td>{item.name}</td>
                                            <td> {item.room}</td>
                                            <td> {item.type}</td>
                                            <td><img src={imageExists(image) ? image : tempImage}
                                                     alt={item.name}/></td>
                                            <td>
                                                <button className="delete_btn"
                                                        onClick={() => handleDelete(item.id, 'Query Items')}>{deleteIcon}</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    const renderQuestionList = () => {
        return (
            <>
                <div className="modal_overlay">
                    <div className="modal_content">
                        <div className="modal_buttons">
                            <button onClick={handleCloseModal} className="close_btn"><img src={closeButton}
                                                                                          alt="X"
                                                                                          className="close_btn"/>
                            </button>
                            <button onClick={() => handleAddButton("add_question")} className="close_btn"><img
                                src={closeButton}
                                alt="X"
                                className="add_btn"/>
                            </button>
                        </div>
                        {openModalAdd === "add_question" && (
                            <>
                                <div className="add_item_modal">
                                    <div className="modal_buttons">
                                        <button onClick={handleCloseAddModal} className="close_btn_add_modal">
                                            <img
                                                src={closeButton}
                                                alt="X"
                                                className="close_btn"/>
                                        </button>
                                        <button onClick={handleSaveQuestionButton}
                                                className="save_btn">{saveIcon}</button>
                                    </div>
                                    <div className="modal_adding_question">
                                                <textarea name="newQuestion" id="newQuestion" rows={1}
                                                          className="adding_question" placeholder="dodaj pytanie"
                                                          onChange={(e) => setAddQuestion(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </>
                        )
                        }
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
                                            <td>{index + 1}</td>
                                            <td>{question.question}</td>
                                            <td>
                                                <button className="delete_btn"
                                                        onClick={() => handleDelete(question.id, "questions")}>{deleteIcon}</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    if (user && user.id !== admin) {
        return navigation('/')
    } else if (!user) {
        return navigation('/')
    } else {
        return (
            <>
                <div className=" container_admin">
                    <div className="admin_button button_answers" onClick={() => handleButtonClick("answers")}>ZAPISANE
                        ODPOWIEDZI
                    </div>
                    {openModal === "answers" && renderAnswersModalContent()}
                    <div className="admin_button button_edit" onClick={() => handleButtonClick("checkbox")}>POZYCJE W
                        ANKIECIE
                    </div>
                    {openModal === "checkbox" && renderQueryItemsList()}

                    <div className="admin_button button_edit" onClick={() => handleButtonClick("question")}>PYTANIA
                        OTWARTE
                    </div>
                    {openModal === "question" && renderQuestionList()}

                </div>
                <Link to="/"><img src="home.png" alt="Home" className="home_button_admin"/></Link>
            </>
        )
    }
}


