import React, {Component} from "react";
import {InputCheckbox} from "../components/InputCheckbox";

export class Question12 extends Component {
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
                            <h5 className="card-title d-inline-block">What do you want to achieve?</h5>
                            <div className="question row mt-2 mb-5">
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveGlowy"
                                        label="Glowy Skin"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveHydrated"
                                        label="Hydrated Skin"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveEven"
                                        label="Even Skin Tone"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveClear"
                                        label="Clear Skin"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveNourished"
                                        label="Nourished Skin"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveYounger"
                                        label="Younger Appearance"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveMatte"
                                        label="Matte Skin"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="achieve"
                                        id="achieveCalm"
                                        label="Calm Skin"
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