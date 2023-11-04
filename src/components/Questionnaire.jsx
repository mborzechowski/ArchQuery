import {useEffect, useState} from 'react';
import supabase from "../services/supabase.js";
import {Link} from 'react-router-dom'
import Footer from "./Footer.jsx";
import {useAppContext} from "../services/AuthContext.jsx";


export default function Questionnaire({isAdminPage, queryAnswers}) {
    const [userName, setUserName] = useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState('');
    const {items, getItems} = useAppContext();
    const shouldRender = !isAdminPage
    const sendAlert = document.getElementById("query_send")


    useEffect(() => {
        getItems();

    }, []);

    function replacePolishChars(text) {
        const polishChars = {
            'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
            'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
        };

        return text.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, char => polishChars[char] || char);
    }

    const RoomsTypesItems = function ({data}) {
        const groupedByRoom = data.reduce((acc, current) => {
            const {room, type, name} = current;
            if (!acc[room]) {
                acc[room] = {};
            }
            if (!acc[room][type]) {
                acc[room][type] = [];
            }
            acc[room][type].push(name);
            return acc;
        }, {});
        const generateDivs = () => {
            return Object.entries(groupedByRoom).map(([room, types], index) => (
                <div key={room} className="form_row">
                    <div className="form_topic">
                        <div className="form_row_number">{index + 1}.</div>
                        <div className="form_row_name">{room}</div>
                    </div>
                    {generateTypeDivs(types)}
                </div>
            ));
        };
        const generateTypeDivs = (types) => {
            return Object.entries(types).map(([type, names]) => (
                <div key={type} className="form_option_list">
                    <div className="form_headers">
                        <div>{type}</div>
                        <div>WYBÓR</div>
                    </div>
                    {generateItemDivs(names)}
                </div>
            ));
        };
        const generateItemDivs = (names) => {

            return names.map((name, idx) => {

                if (queryAnswers) {
                    const itemsToRender = queryAnswers.items;
                    const keys = itemsToRender.map(([key]) => `option-${key}`)
                    const tempImage = "question.png";
                    const nameWithoutPolish = replacePolishChars(name)
                    const iconSupabase = `https://fyqfkfprxpzhsyslsnff.supabase.co/storage/v1/object/public/avatars/icons/${nameWithoutPolish}.png`


                    return (
                        <div key={idx} className="row">
                            <img
                                src={iconSupabase || tempImage}
                                alt={name}
                                className={`query_item_img ${idx === names.length - 1 ? 'last_checkbox' : ''}`}
                            />
                            <div className={`form_option ${idx === names.length - 1 ? 'last_checkbox' : ''}`} id={`option-${name}-${idx}`}>{name}</div>
                            <div className={`form_checkbox ${keys.includes(`option-${name}-${idx}`) ? 'checked' : ''} ${idx === names.length - 1 ? 'last_checkbox' : ''}`}
                                 id={`option-${name}-${idx}`}>
                                <input
                                    type="checkbox"
                                    id={`checkbox-${name}-${idx}`}
                                    defaultChecked={selectedCheckboxes[`${name}-${idx}`]}
                                />
                            </div>
                        </div>
                    )
                } else {
                    const tempImage = "question.png";
                    const nameWithoutPolish = replacePolishChars(name)
                    const iconSupabase = `https://fyqfkfprxpzhsyslsnff.supabase.co/storage/v1/object/public/avatars/icons/${nameWithoutPolish}.png`

                    return (
                        <div key={idx} className="row">
                            <img
                                src={iconSupabase || tempImage}
                                alt={name}
                                className={`query_item_img ${idx === names.length - 1 ? 'last_checkbox' : ''}`}
                            />
                            <div className={`form_option ${idx === names.length - 1 ? 'last_checkbox' : ''}`} id={`option-${name}-${idx}`}>{name}</div>
                            <div className={`form_checkbox ${idx === names.length - 1 ? 'last_checkbox' : ''}`}>
                                <input
                                    type="checkbox"
                                    id={`checkbox-${name}-${idx}`}
                                    checked={selectedCheckboxes[`${name}-${idx}`]}
                                    onChange={() => handleCheckboxChange(name, idx)}
                                />
                                <label htmlFor={`checkbox-${name}-${idx}`}></label>
                                <span></span>
                            </div>
                        </div>
                    )
                }
            });
        };
        return <div>{generateDivs()}</div>;
    }

    const handleSendButtonClick = async () => {
        try {

            if (!userName.trim()) {
                alert('Proszę podpisz się');
                return;
            }
            const dataToSave = {
                user_name: userName,
                items: Object.entries(selectedCheckboxes),
            };
            const {data, error} = await supabase.from('answers_questionnaire').insert([dataToSave]);

            if (error) {
                throw error;
            }

            setUserName('');
            setSelectedCheckboxes({});
            sendAlert.classList.remove("hidden")
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    };

    const handleCheckboxChange = (name, suffix) => {
        const optionElement = document.getElementById(`option-${name}-${suffix}`);
        const checkboxElement = document.getElementById(`checkbox-${name}-${suffix}`);

        if (checkboxElement.checked) {
            optionElement.style.color = '#0000ff';
            setSelectedCheckboxes((prevSelected) => ({...prevSelected, [`${name}-${suffix}`]: true}));
        } else {
            optionElement.style.color = 'black';
            setSelectedCheckboxes((prevSelected) => {
                const updatedSelected = {...prevSelected};
                delete updatedSelected[`${name}-${suffix}`];
                return updatedSelected;
            });
        }
    };

    const handleAlertConfirm = () => {
        sendAlert.classList.add("hidden")
    }


    const renderFormTop = () => (
        <div className="form_top">
            ankieta dotycząca wyposażenia wnętrza{' '}

                <button className="btn_form_top" onClick={handleSendButtonClick}>
                    wyślij{' '}
                </button>
        </div>
    );

    const renderInputName = () => (
        <input
            className="input_name"
            type="text"
            placeholder="projekt / imię"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
    );

    const renderFooter = () => <Footer/>;

    const renderLink = () => (
        <Link to="/" className="centered_image">
            <img src="home.png" alt="Home" className="home"/>
        </Link>
    );


    return (

        <div className="container">
            {shouldRender && renderFormTop()}
            {shouldRender && renderInputName()}
            <RoomsTypesItems
                data={items}
                displayMode="standard"
            />
            {shouldRender && renderLink()}
            {shouldRender && renderFooter()}
            <div className="query_send hidden" id="query_send">odpowiedzi zapisane! <button className="query_send_ok" onClick={handleAlertConfirm}>OK</button></div>
        </div>
    )
}

