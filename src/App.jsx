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

function App() {

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/questionnaire" element={<Questionnaire/>}/>
                    <Route path="/questions" element={<Questions/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/contact" element={<Contact/>}/>


                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
