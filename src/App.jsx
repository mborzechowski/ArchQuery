import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Questionnaire from "./components/Questionnaire.jsx";
import Home from "./components/Home.jsx";
import './scss/main.scss'

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/questionnaire" element={<Questionnaire/>}/>
            </Routes>
        </Router>
    )
}

export default App
