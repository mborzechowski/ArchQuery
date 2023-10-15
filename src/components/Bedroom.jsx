import "../scss/questionnaire.scss";

export default function Bedroom(){
    return (
        <>
            <div className="form_row">
                <div className="form_topic">
                    <div className="form_row_number">2.</div>
                    <div className="form_row_name">SYPIALNIA</div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>SZEROKOŚĆ ŁÓŻKA</div>
                        <div>WYBÓR</div>
                    </div>

                    <div className="row">
                        <div className="form_option">140 cm</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox8"/><label
                            htmlFor="customCheckbox8"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">160 cm</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox9"/><label
                            htmlFor="customCheckbox9"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">180 cm</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox10"/><label htmlFor="customCheckbox10"></label><span></span></div>
                    </div>

                    <div className="row">
                        <div className="form_option">200 cm</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox11"/><label
                            htmlFor="customCheckbox11"></label><span></span></div>
                    </div>
                </div>
                <div className="form_option_list">
                    <div className="form_headers">
                        <div>DŁUGOŚĆ ŁÓŻKA</div>
                        <div>WYBÓR</div>
                    </div>
                    <div className="row">
                        <div className="form_option">200 cm</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox12"/><label
                            htmlFor="customCheckbox12"></label><span></span></div>
                    </div>
                    <div className="row">
                        <div className="form_option">220 cm</div>
                        <div className="form_checkbox"><input type="checkbox" id="customCheckbox13"/><label
                            htmlFor="customCheckbox13"></label><span></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}