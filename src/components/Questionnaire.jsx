import {useEffect, useState} from 'react';
import "../scss/questionnaire.scss";
import supabase from "../services/supabase.js";

export default function Questionnaire() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        try {
            const {data, error} = await supabase.from('Query Items').select('*');

            if (error) {
                throw error;
            }

            data && setItems(data);
        } catch (error) {
            console.error('Something went wrong', error);
        }
    }

    const RoomsTypesItems = function ({data}) {
        const groupedByRoom = data.reduce((acc, current) =>{
            const {room,type,name} = current;
            if (!acc[room]){
                acc[room] ={};
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
            return names.map((name, idx) => (
                <div key={idx} className="row">
                    <div className="form_option" id={`option-${name}-${idx}`}>{name}</div>
                    <div className="form_checkbox">
                        <input
                            type="checkbox"
                            id={`checkbox-${name}-${idx}`}
                            onChange={() => handleCheckboxChange(name, idx)}
                        />
                        <label htmlFor={`checkbox-${name}-${idx}`}></label>
                        <span></span>
                    </div>
                </div>
            ));
        };
        return <div>{generateDivs()}</div>;
    }

    const handleCheckboxChange = (name, suffix) => {
        const optionElement = document.getElementById(`option-${name}-${suffix}`);
        const checkboxElement = document.getElementById(`checkbox-${name}-${suffix}`);

        if (checkboxElement.checked) {
            optionElement.style.color = '#0000ff';
        } else {
            optionElement.style.color = '';
        }
    };

    return (
        <>
            <div className="container">
            <div className="form_top">ankieta dotycząca wyposażenia wnętrza <button
                className="btn_form_top">wyślij </button></div>
            <RoomsTypesItems data={items} />
            </div>
        </>
    )
}


// useEffect(() => {
//     async function fetchData() {
//         await getNotes();
//         console.log(notes, "log")
//     }
//     fetchData();
//
// }, []);