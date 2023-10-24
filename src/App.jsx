import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Questionnaire from "./components/Questionnaire.jsx";
import Home from "./components/Home.jsx";
import Questions from "./components/Questions.jsx";
import Admin from "./components/Admin.jsx";
import './scss/main.scss'
import Login from "./components/Login.jsx";


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/questionnaire" element={<Questionnaire/>}/>
                <Route path="/questions" element={<Questions/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>


            </Routes>
        </Router>
    )
}

export default App
