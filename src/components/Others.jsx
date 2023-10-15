import "../scss/questionnaire.scss";

export default function Other() {

    return (
        <>
            <div className="form_row">
                <div className="form_topic">
                    <div className="form_row_number">4.</div>
                    <div className="form_row_name">INNE</div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>OKNA</div>
                        <div>WYBÓR</div>
                    </div>

                    <div className="row">
                        <div className="form_option">zasłony</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox22"/><label
                            htmlFor="customCheckbox22"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">firany</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox23"/><label
                            htmlFor="customCheckbox23"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">rolety</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox24"/><label
                            htmlFor="customCheckbox24"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">żaluzje</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox25"/><label
                            htmlFor="customCheckbox25"></label><span></span></div>
                    </div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>PRZECHOWYWANIE</div>
                        <div>WYBÓR</div>
                    </div>
                    <div className="row">
                        <div className="form_option">szafki otwarte</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox26"/><label
                            htmlFor="customCheckbox26"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">szafki zamknięte</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox27"/><label
                            htmlFor="customCheckbox27"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">garderoba</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox28"/><label
                            htmlFor="customCheckbox28"></label><span></span></div>
                    </div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>TV</div>
                        <div>WYBÓR</div>
                    </div>
                    <div className="row">
                        <div className="form_option">telewizor</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox29"/><label
                            htmlFor="customCheckbox29"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">projektor</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox30"/><label
                            htmlFor="customCheckbox30"></label><span></span></div>
                    </div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>LOKALIZACJA TV</div>
                        <div>WYBÓR</div>
                    </div>
                    <div className="row">
                        <div className="form_option">salon</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox31"/><label
                            htmlFor="customCheckbox31"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">sypialnia</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox32"/><label
                            htmlFor="customCheckbox32"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">kuchnia</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox33"/><label
                            htmlFor="customCheckbox33"></label><span></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}