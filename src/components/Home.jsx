import {  Link  } from 'react-router-dom'
import "../scss/_home.scss"
export default function Home() {


    return (
        <>
            <div className="main_page"><img src="projekt.png" alt="projekt" />
                <div className="main_page_menu"><span className="logo">AGATA TOFEL</span>
                    <nav className="main_page_menu_options">
                        <Link to="/questionnaire" className="custom_link"><div>ANKIETA</div></Link>
                        <div>PYTANIA WSTĘPNE</div>
                        <div>CV</div>
                        <div>KONTAKT</div>
                    </nav>
                </div>
            </div>
        </>
    )
}