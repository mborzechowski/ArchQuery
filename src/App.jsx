import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './scss/main.scss'
import Questionnaire from "./components/Questionnaire.jsx";
import Home from "./components/Home.jsx";
import Questions from "./components/Questions.jsx";
import Admin from "./components/Admin.jsx";
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import {AuthProvider} from './services/AuthContext.jsx';
import Contact from "./components/Contact.jsx";
import {AppProvider} from "./services/AuthContext.jsx";
import Cv from "./components/CV.jsx";

function App() {

    return (
        <AppProvider>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/ankieta" element={<Questionnaire/>}/>
                        <Route path="/pytania" element={<Questions/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/kontact" element={<Contact/>}/>
                        <Route path="/cv" element={<Cv/>}/>

                    </Routes>
                </Router>
            </AuthProvider>
        </AppProvider>
    )
}

export default App
