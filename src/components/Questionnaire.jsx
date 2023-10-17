import {useEffect, useState} from 'react';
import Bathroom from "./Bathroom.jsx";
import Bedroom from "./Bedroom.jsx";
import Kitchen from "./Kitchen.jsx";
import Other from "./Others.jsx";
import supabase from "../services/supabase.js";

export default function Questionnaire() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes();
    }, []);

    async function getNotes() {
        try {
            const {data, error} = await supabase.from('Query Items').select('*');

            if (error) {
                throw error;
            }

            data && setNotes(data);
        } catch (error) {
            console.error('Something went wrong', error);
        }
    }

    const Rooms = function ({data}) {
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
            return names.map((name, index) => (
                <div key={index} className="row">
                    <div className="form_option">{name}</div>
                    <div className="form_checkbox"><input type="checkbox" id={name}/><label
                        htmlFor={name}></label><span></span></div>
                </div>
            ));
        };
        return <div>{generateDivs()}</div>;
    }

    return (
        <>
            <div className="form_top">ankieta dotycząca wyposażenia wnętrza <button
                className="btn_form_top">wyślij </button></div>

            <Bathroom/>
            <Bedroom/>
            <Kitchen/>
            <Other/>
            <Rooms data={notes} />
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