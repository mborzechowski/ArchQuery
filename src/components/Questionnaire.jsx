
import Bathroom from "./Bathroom.jsx";
import Bedroom from "./Bedroom.jsx";
import Kitchen from "./Kitchen.jsx";
import Other from "./Others.jsx";

export default function Questionnaire(){
return (
    <>
        <div className="form_top">ankieta dotycząca wyposażenia wnętrza   <button className="btn_form_top">wyślij </button></div>
        <Bathroom />
        <Bedroom />
        <Kitchen/>
        <Other/>
    </>
)
}