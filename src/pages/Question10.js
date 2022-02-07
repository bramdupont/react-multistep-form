import React, {Component} from "react";
import {InputRadio} from "../components/InputRadio";

export class Question10 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        return (
            <div>
                <React.Fragment>
                    <div className="card">
                        <div className="card-body text-start">
                            <h5 className="card-title d-inline-block">Do you experience any irritation on your skin?</h5>
                            <div className="question row mt-2 mb-5">
                                <div className="d-flex mb-2 flex-row align-items-center">
                                    <InputRadio
                                        name="irritation"
                                        id="irritationYesRed"
                                        label="Yes, often red and irritated on my cheeks"
                                    />
                                </div>
                                <div className="d-flex mb-2 flex-row align-items-center">
                                    <InputRadio
                                        name="irritation"
                                        id="irritationYesProduct"
                                        label="Yes, my skin reacts to different product"
                                    />
                                </div>
                                <div className="d-flex mb-2 flex-row align-items-center">
                                    <InputRadio
                                        name="irritation"
                                        id="irritationNo"
                                        label="No, I don’t experience any irritation"
                                    />
                                </div>
                            </div>
                            <div className="row flex-row justify-content-end d-flex">
                                <div className="col-auto">
                                    <a href="#" className="d-inline-block btn btn-outline-secondary" onClick={this.back}>Previous</a>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="d-inline-block btn btn-primary" onClick={this.continue}>Next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}