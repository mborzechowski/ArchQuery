import {Link} from 'react-router-dom'
import Footer from "./Footer.jsx";
import {useEffect, useState} from 'react';
import supabase from "../services/supabase.js";

export default function Questions() {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const {data, error} = await supabase.from('questions').select('question');

            if (error) {
                throw error;
            }

            data && setQuestion(data);
            if (data) {
                setQuestion(Object.values(data).map(entry => entry.question));
            }

        } catch (error) {
            console.error('Something went wrong', error);
        }
    };
    const GenerateQuestions = function ({data}) {
        if (!Array.isArray(data) || data.length === 0) {
            return null;
        }

        return data.map((question, index) => (
            <li className="single_question" key={index}>
                <input className="input_questions" type="text" placeholder=" "/>
                <label className="label_questions">{question}</label>
            </li>
        ));
    }

    return (
        <>
            <div className="container container_questions">
                <img src="logo-mini.png" alt="LOGO" className="logo_mini"/>
                <span className="questions_list_title">pytania wstępne</span>
                <ol className="questions_list">
                    <GenerateQuestions data={question}/>
                </ol>
                <Link to="/" className="centered_image">
                    <img src="home.png" alt="Home" className="home"/>
                </Link>
                <Footer/>
            </div>
        </>
    )
}
// useEffect(() => {
//     const labelElement = document.querySelector(".label_questions");
//     const inputElement = document.querySelector(".input_questions");
//
//     if (labelElement && inputElement) {
//         const labelWidth = labelElement.offsetWidth;
//         document.documentElement.style.setProperty('--label-width', `${labelWidth}px`);
//
//         const answerWidth = inputElement.getBoundingClientRect().width;
//         document.documentElement.style.setProperty('--answer-width', `${answerWidth}px`);
//
//         const myInput = inputElement;
//         myInput.addEventListener('input', function () {
//             if (myInput.value.trim() !== '') {
//                 myInput.classList.add('filled');
//             } else {
//                 myInput.classList.remove('filled');
//             }
//         });
//     }
//
//     getQuestion();
//     console.log(question)
// }, [])
//
// async function getQuestion() {
//     try {
//         const { data, error } = await supabase.from('questions').select('*');
//
//         if (error) {
//             throw error;
//         }
//         console.log('Dane zwrócone przez Supabase:', data)
//
//         data && setQuestion(data);
//     } catch (error) {
//         console.error('Something went wrong', error);
//     }
// }

// const GenerateQuestions =  (data) => {
//     return data.map((question, index) => (
//         <li className="single_question" key={index}>
//             <input className="input_questions" type="text" placeholder=" " />
//             <label className="label_questions">{question}</label>
//         </li>
//     ));
// }

//     return (
//         <>
//             <div className="container container_questions">
//                 <img src="logo-mini.png" alt="LOGO" className="logo_mini" />
//                 <span className="questions_list_title">pytania wstępne</span>
//                 <ol className="questions_list">
//                     {/*<GenerateQuestions data={question} />*/}
//                 </ol>
//                 <Link to="/" className="centered_image">
//                     <img src="home.png" alt="Home" className="home" />
//                 </Link>
//                 <Footer />
//             </div>
//         </>
//     )
// }


{/*<li className="single_question"><input className="input_questions" type="text" placeholder=" "/>*/
}
{/*    <label className="label_questions">Ile osób będzie mieszkać w lokalu?</label></li>*/
}
{/*<li className="single_question"><input className="input_questions" type="text"/><label*/
}
{/*    className="label_questions">Dla kogo będą przeznaczone poszczególne pomieszczenia?</label></li>*/
}
{/*<li>Jakie będzie przeznaczenie poszczególnych pomieszczeń?</li>*/
}
{/*<li>Czy w którymś z pomieszczeń jest potrzeba wygospodarowania dodatkowej funkcji (np. miejsce do*/
}
{/*    pracy, toaleta, dodatkowe miejsce noclegowe dla gości)?*/
}
{/*</li>*/
}
{/*<li>Czy w niedalekiej przyszłości spodziewana jest zmiana sposobu użytkowania*/
}
{/*    mieszkania/któregoś z pomieszczeń (np. związku z planowanym pojawieniem się dziecka*/
}
{/*    lub zamieszkania kolejnej osoby)?*/
}
{/*</li>*/
}
{/*<li>Czy projekt powinien uwzględniać częste wizyty lub nocowanie gości?*/
}
{/*</li>*/
}
{/*<li>Czy w mieszkaniu są miejsca, które Ci się szczególnie podobają?</li>*/
}
{/*<li>Czy w mieszkaniu są miejsca, które Ci się szczególnie nie podobają?</li>*/
}
{/*<li>Czy masz sprawdzone rozwiązania, które chciałabyś/chciałbyś przenieść do nowej*/
}
{/*    przestrzeni?*/
}
{/*</li>*/
}
{/*<li>Czy ma masz rozwiązania, które się nie sprawdziły i które nie powinny być powtarzane w*/
}
{/*    nowej przestrzeni?*/
}
{/*</li>*/
}
{/*<li>Które z pomieszczeń jest dla Ciebie szczególnie ważne?</li>*/
}
{/*<li>Czy ważniejsza jest dla Ciebie funkcjonalność czy estetyka?</li>*/
}
{/*<li>Czy preferujesz droższe, oryginalne produkty czy tańsze i łatwiej dostępne zamienniki?</li>*/
}
{/*<li>Czy jest stylistyka lub klimat, w którym czujesz się najlepiej?</li>*/
}
{/*<li>Czy są kolory, które szczególnie lubisz, bądź takie, których chciałabyś/chciałbyś uniknąć?</li>*/
}
{/*<li>Czy masz szczególne wymagania dotyczące oświetlenia (np. oświetlenie nocne, czujki ruchu,*/
}
{/*    preferowane oświetlenie górne lub boczne)?*/
}
{/*</li>*/
}
{/*<li>Czy są materiały, których należy zdecydowanie unikać w projekcie (np. płytki, dywany,*/
}
{/*    panele, tapety)?*/
}
{/*</li>*/
}
{/*<li>Czy masz hobby lub pracę, która wymaga wygospodarowania dodatkowej przestrzeni*/
}
{/*    (np. miejsce na rower, duża ilość książek, pianino, itp.)?*/
}
{/*</li>*/
}
{/*<li>Czy w projekcie należy uwzględnić niestandardowe rozwiązania (np. specjalistyczne*/
}
{/*    nagłośnienie lub wyciszenie, głośniki w łazience, niestandardowe gniazda*/
}
{/*    - USB/HDMI/ładowanie indukcyjne, itp.)?*/
}
{/*</li>*/
}
{/*<li>Czy posiadasz meble lub przedmioty, które należy uwzględnić w projekcie?</li>*/
}
{/*<li>Jaki maksymalny budżet przewidziany jest na realizację projektu?*/
}
{/*</li>*/
}
{/*<li>Czy są elementy, do których chciałabyś/chciałbyś przywiązać szczególną wagę, na których*/
}
{/*    nie powinno się oszczędzać?*/
}
{/*</li>*/
}
{/*<li>Jakie elementy mogą być zakupione w późniejszym czasie, a które muszą znaleźć się we*/
}
{/*    wnętrzu od razu?*/
}
{/*</li>*/
}