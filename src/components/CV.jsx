import {Link} from "react-router-dom";
import logo_cv from "../assets/projekt-cv.png"

export default function Cv () {
    return (
        <div className="container container_cv">
            <img src={logo_cv} alt="logo-cv" className="cv_logo"/>
            <h2 className="cv_element_name exp">DOŚWIADCZENIE</h2>
            <table >
                <thead>
                <tr className="cv_table_row">
                    <th className="cv_table_left_title">kwiecień 2019 - obecnie</th>
                    <th className="cv_table_right_title">Boris Kudlička with partners:</th>
                </tr>
                </thead>
                <tbody>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2020 - obecnie</td>
                    <td className="cv_table_right"><p>Zabytkowa willa w Konstancinie-Jeziornej</p>
                        prowadzenie projektu – wnętrza / koncepcja + koordynacja branżowa + projekt wykonawczy + nadzór autorski</td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2022</td>
                    <td className="cv_table_right">
                        <p>Apartament przy Draycott Avenue w Londynie</p>prowadzenie projektu – wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2022</td>
                    <td className="cv_table_right">
                        <p>Osada modułowych domków wypoczynkowych wraz z infrastrukturą w Kalborni nad jeziorem Dąbrowa Wielka</p>prowadzenie projektu – wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2020-2021</td>
                    <td className="cv_table_right">
                        <p>Renowacja i rozbudowa zespołu hotelowego Jacznie</p>prowadzenie projektu – wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2020-2021</td>
                    <td className="cv_table_right">
                        <p>Rozbudowa i renowacja zabytkowej willi w Théoule-sur-Mer, Francja</p>prowadzenie projektu - wnętrza i architektura / koncepcja + koordynacja branżowa + projekt wykonawczy + nadzór autorski
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2019</td>
                    <td className="cv_table_right">
                        <p>Dom jednorodzinny przy ul. Lipkowskiej w Warszawie</p>prowadzenie projektu – wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2019</td>
                    <td className="cv_table_right">
                        <p>Apartament w Villi Monaco w Warszawie</p>prowadzenie projektu – wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left_title">kwiecień 2019 - obecnie</td>
                    <td className="cv_table_right_title">projekt: Agata Tofel:</td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2021-2022</td>
                    <td className="cv_table_right">
                        <p>Dom jednorodzinny w mieście Xabia w Hiszpanii</p>projekt własny - wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2021</td>
                    <td className="cv_table_right">
                        <p>Łazienka z sauną w domu jednorodzinnym w Ostrowcu</p>projekt własny – wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2021</td>
                    <td className="cv_table_right">
                        <p>Apartament na osiedlu Praga Deco w Warszawie</p>projekt własny – wnętrza / zmiany lokatorskie
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2021</td>
                    <td className="cv_table_right">
                        <p>Kamper ¡Hola Hola! van</p>projekt własny - wnętrza / koncepcja + nadzór autorski
                        <a href="https://label-magazine.com/lifestyle/artykuly/lesny-dom-na-kolkach-zagladamy-do-wnetrza-stylowego-kampera">https://label-magazine.com/lifestyle/artykuly/lesny-dom-na-kolkach-zagladamy-do-wnetrza-stylowego-kampera</a>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2021</td>
                    <td className="cv_table_right">
                        <p>Lifting kuchni oraz łazienki w domu jednorodzinnym w Ostrowcu Św.</p>projekt własny - wnętrza / koncepcja + koordynacja branżowa + projekt wykonawczy + nadzór autorski
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2020</td>
                    <td className="cv_table_right">
                        <p>Adaptacja strychu w domu jednorodzinnym w Krakowie</p>projekt własny - wnętrza / koncepcja
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2020</td>
                    <td className="cv_table_right">
                        <p>Apartament na osiedlu Active City w Warszawie</p>projekt własny - wnętrza / koncepcja
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2018-2019</td>
                    <td className="cv_table_right">
                        <p>Apartament w Nowej Królikarni w Warszawie</p>projekt własny - wnętrza / koncepcja + koordynacja branżowa + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2019</td>
                    <td className="cv_table_right">
                        <p>Apartament przy ul. Woronicza w Warszawie</p>wnętrza / koncepcja + koordynacja branżowa + projekt wykonawczy + nadzór autorski
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left_title">maj 2009 - kwiecień 2019</td>
                    <td className="cv_table_right_title">Atelier 3 Girtler&Girtler Biuro Architektoniczne:</td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2018-2019</td>
                    <td className="cv_table_right">
                        <p>Hotel &quot;th_LOOM&&quot; w Łodzi</p>prowadzenie projektu - wnętrza / koncepcja + koordynacja branżowa
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2017</td>
                    <td className="cv_table_right">
                        <p>Rozbudowa hotelu SPA Dr Irena Eris w Polanicy-Zdroju o restaurację &quot;Décompresja&quot;</p>prowadzenie projektu - wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2016-2018</td>
                    <td className="cv_table_right">
                        <p>Rozbudowa pałacu w Rozalinie</p>prowadzenie projektu - architektura + wnętrza / koncepcja + projekt budowlany
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2016</td>
                    <td className="cv_table_right">
                        <p>Budynek mieszkalny przy ul. Berezyńskiej w Warszawie</p>prowadzenie projektu - wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2016</td>
                    <td className="cv_table_right">
                        <p>Budynek mieszalny &quot;Green Mokotów&quot; w Warszawie</p>współpraca przy projekcie - wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2016-2017</td>
                    <td className="cv_table_right">
                        <p>Budynek mieszkalny &quot;Stacja Nowy Ursus&quot; w Warszawie</p>prowadzenie projektu - wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2014-2016</td>
                    <td className="cv_table_right">
                        <p>Hotel “Natura Mazur” w Warchałach</p>prowadzenie projektu - wnętrza / koncepcja + projekt wykonawczy + nadzór autorski
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2013-2014</td>
                    <td className="cv_table_right">
                        <p>Hotel SPA dr Irena Eris w Polanicy-Zdroju</p>współpraca przy projekcie - wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2013-2014</td>
                    <td className="cv_table_right">
                        <p>Rozbudowa hotelu Europa w Starachowicach</p>prowadzenie projektu - wnętrza / koncepcja + projekt wykonawczy
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2012-2013</td>
                    <td className="cv_table_right">
                        <p>Adaptacja i rozbudowa stadniny koni w Żółkiewce</p>prowadzenie projektu - architektura / koncepcja
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2012</td>
                    <td className="cv_table_right">
                        <p>Adaptacja i rozbudowa zabytkowego pałacu w Komierowie</p>prowadzenie projektu - architektura / koncepcja + projekt budowlany
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2011-2012</td>
                    <td className="cv_table_right">
                        <p>Rozbudowa hotelu SPA dr Irena Eris w Krynicy-Zdroju</p>prowadzenie projektu - architektura + wnętrza / koncepcja + projekt budowlany + projekt wykonawczy + nadzór autorski
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2010-2011</td>
                    <td className="cv_table_right">
                        <p>Budynek mieszkalny przy ul. Rydygiera w Warszawie</p>współpraca przy opracowaniu dokumentacji projektowej - architektura
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">2009</td>
                    <td className="cv_table_right">
                        <p>Budynek mieszkalny przy ul. Żelaznej w Warszawie</p>współpraca przy opracowaniu dokumentacji projektowej - architektura
                    </td>
                </tr>
                </tbody>
            </table>
            <h2 className="cv_element_name school">NAUKA</h2>
            <table>
                <tbody>
                <tr className="cv_table_row">
                    <td className="cv_table_left">czerwiec 2017</td>
                    <td className="cv_table_right">
                        <p>Izba Architektów Rzeczypospolitej Polskiej</p>uzyskanie uprawnień budowlanych w specjalności
                        architektonicznej do projektowania bez ograniczeń
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">październik 2005 - grudzień 2011</td>
                    <td className="cv_table_right">
                        <p>Politechnika Warszawska</p>Wydział Architektury
                        ukończony z tytułem mgr inż. arch.
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">sierpień 2008 - grudzień 2008</td>
                    <td className="cv_table_right">
                        <p>Norwegian University of Science and
                            Technology, Faculty of Architecture
                            and Fine Art, Trondheim</p>jako część programu Erasmus
                    </td>
                </tr>
                </tbody>
            </table>
            <h2 className="cv_element_name abilities">UMIEJĘTNOŚCI</h2>
            <table>
                <tbody>
                <tr className="cv_table_row">
                    <td className="cv_table_left">Programy</td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <p>AutoCAD</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <p>ArchiCAD</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <p>SketchUp</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <p>V-ray</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <p>Enscape</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <p>Photoshop</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <p>InDesign</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <p>Illustrator</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left"></td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <p>Revit</p>
                    </div>
                    </td>
                </tr>
                <tr className="cv_table_row">
                    <td className="cv_table_left">Języki</td>
                    <td className="cv_table_right"><div className="cv_table_abilities">
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square full"></div>
                        <div className="square"></div>
                        <p>angielski</p>
                    </div>
                        <span>First Certificate in English</span>
                    </td>
                </tr>
                </tbody>
            </table>

            <Link to="/" className="centered_image">
                <img src="home.png" alt="Home" className="home"/>
            </Link>
        </div>

    )
}

