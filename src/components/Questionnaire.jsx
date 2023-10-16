import {useEffect, useState} from 'react';
import Bathroom from "./Bathroom.jsx";
import Bedroom from "./Bedroom.jsx";
import Kitchen from "./Kitchen.jsx";
import Other from "./Others.jsx";
import supabase from "../services/supabase.js";

export default function Questionnaire() {
    // const [notes, setNotes] = useState("")
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         await getNotes();
    //         console.log(notes, "log")
    //     }
    //
    //     fetchData();
    // }, []);
    //
    // async function getNotes(){
    //     let { data ,error } = await supabase
    //         .from('Query Items')
    //         .select('*')
    //     console.log(data, "func")
    //     if (!error) {
    //         setNotes(data);
    //         return;
    //     }
    //
    //     console.error('something went wrong', error);
    // }


    return (
        <>
            <div className="form_top">ankieta dotycząca wyposażenia wnętrza <button
                className="btn_form_top">wyślij </button></div>

            <Bathroom/>
            <Bedroom/>
            <Kitchen/>
            <Other/>
            {/*{*/}
            {/*    notes.map(note => <li key={note.id}>{note.name}</li>)*/}
            {/*}*/}
        </>
    )
}