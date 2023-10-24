import {Link} from 'react-router-dom'

export default function Admin() {


    return (
        <>
            <div className=" container_admin">
                <div className="admin_button">ZAPISANE ODPOWIEDZI</div>
                <div className="admin_button">POZYCJE W ANKIECIE</div>
                <div className="admin_button">PYTANIA OTWARTE</div>


                <Link to="/" className="centered_image"><img src="home.png" alt="Home" className="home"/></Link>
            </div>
        </>
    )
}


