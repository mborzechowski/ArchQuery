import "../scss/bathroom.scss";

export default function Bathroom() {

    return (
        <>
        <div className="form_row">
            <div className="form_topic">
                <div className="form_row_number">1.</div>
                <div className="form_row_name">ŁAZIENKA</div>
            </div>
            <div className="form_option_list">
                <div className="form_headers">
                    <div>TOALETA</div>
                    <div>WYBÓR</div>
                </div>

                <div className="row">
                    <div className="form_option">WC</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox1"/><label
                        htmlFor="customCheckbox1"></label><span></span></div>
                </div>

                <div className="row">
                    <div className="form_option">bidet</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox2"/><label
                        htmlFor="customCheckbox2"></label><span></span></div>
                </div>

                <div className="row">
                    <div className="form_option">bidetta</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox3"/><label for="customCheckbox3"></label><span></span></div>
                </div>

                <div className="row">
                    <div className="form_option">toaleta myjąca</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox4"/><label
                        htmlFor="customCheckbox4"></label><span></span></div>
                </div>
            </div>
            <div className="form_option_list">
                <div className="form_headers">
                    <div>KĄPIEL</div>
                    <div>WYBÓR</div>
                </div>
                <div className="row">
                    <div className="form_option">wanna</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox5"/><label
                        htmlFor="customCheckbox5"></label><span></span></div>
                </div>
                <div className="row">
                    <div className="form_option">prysznic</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox6"/><label
                        htmlFor="customCheckbox6"></label><span></span></div>
                </div>
                <div className="row">
                    <div className="form_option">wanna z prysznicem</div>
                    <div className="form_checkbox"><input type="checkbox" id="customCheckbox7"/><label
                        htmlFor="customCheckbox7"></label><span></span></div>
                </div>
            </div>
        </div>
        </>
        )
        }


