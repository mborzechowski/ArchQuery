import "../scss/questionnaire.scss";

export default function Kitchen(){

    return (
        <>
            <div className="form_row">
                <div className="form_topic">
                    <div className="form_row_number">3.</div>
                    <div className="form_row_name">KUCHNIA</div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>KUCHENKA</div>
                        <div>WYBÓR</div>
                    </div>

                    <div className="row">
                        <div className="form_option">gazowa</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox14"/><label
                            htmlFor="customCheckbox14"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">ceramiczna</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox15"/><label
                            htmlFor="customCheckbox15"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">indukcyjna</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox16"/><label htmlFor="customCheckbox16"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">mikrofalowa</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox17"/><label
                            htmlFor="customCheckbox17"></label><span></span></div>
                    </div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>DODATKOWE</div>
                        <div>WYBÓR</div>
                    </div>
                    <div className="row">
                        <div className="form_option">ekspres do kawy</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox18"/><label
                            htmlFor="customCheckbox18"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">robot kuchenny</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox19"/><label
                            htmlFor="customCheckbox19"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">czajnik elektryczny</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox20"/><label
                            htmlFor="customCheckbox20"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">toster</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox21"/><label
                            htmlFor="customCheckbox21"></label><span></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}