import {useEffect, useState} from 'react';
import supabase from "../services/supabase.js";
import {Link} from 'react-router-dom'
import Footer from "./Footer.jsx";
import {useAppContext} from "../services/AuthContext.jsx";



export default function Questionnaire() {
    const [userName, setUserName] = useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState('');
    const { items,  getItems } = useAppContext();


    useEffect(() => {
        getItems();
    }, []);

    const RoomsTypesItems = function ({data, displayMode}) {
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
                const image = `${name}.png`
                if (displayMode === "standard") {
                    return (
                        <div key={idx} className="row">
                            <img
                                src={image}
                                alt={name}
                                className="query_item_img"
                            />
                            <div className="form_option" id={`option-${name}-${idx}`}>{name}</div>
                            <div className="form_checkbox">
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
                } else if (displayMode === "custom") {
                    return (
                        <div key={idx} className="row">
                            <img
                                src={image}
                                alt={name}
                                className="query_item_img"
                            />
                            <div className="form_option" id={`option-${name}-${idx}`}>{name}</div>
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
                alert('Proszę wprowadzić Imię / Nazwę.');
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

            console.log('Dane zostały zapisane:', data);
            setUserName('');
            setSelectedCheckboxes({});
        } catch (error) {
            console.error('Coś poszło nie tak:', error);
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

    return (
        <>
            <div className="container">
                <div className="form_top">ankieta dotycząca wyposażenia wnętrza <button
                    className="btn_form_top" onClick={handleSendButtonClick}>wyślij </button></div>
                <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <RoomsTypesItems
                    data={items}
                    displayMode="standard"
                    />
                <Link to="/" className="centered_image"><img src="home.png" alt="Home" className="home"/></Link>
                <Footer/>
            </div>
        </>
    )
}

