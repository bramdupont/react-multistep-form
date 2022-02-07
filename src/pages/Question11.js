import React, {Component} from "react";
import {InputCheckbox} from "../components/InputCheckbox";

export class Question11 extends Component {
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
                            <h5 className="card-title d-inline-block">How does your skin feels throughout the day?</h5>
                            <div className="question row mt-2 mb-5">
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayTight"
                                        label="Cleanser"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayShiny"
                                        label="Shiny T-Zone"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayRedIrri"
                                        label="Red and Irritated"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayRed"
                                        label="Only Red"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayNormal"
                                        label="Normal"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayOily"
                                        label="Oily"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinDay"
                                        id="skinDayFlakey"
                                        label="Flakey"
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