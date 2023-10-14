import { useState, useEffect } from 'react';
import Bathroom from "./Components/bathroom.jsx";

export default function Questionnaire(){
return (
    <>
        <div className="form_top">ankieta dotycząca wyposażenia wnętrza   <button className="btn_form_top">wyślij </button></div>
        <Bathroom />
    </>
)
}