import React, {Component} from "react";
import {InputRadio} from "../components/InputRadio";

export class Question2 extends Component {
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
                            <h5 className="card-title d-inline-block">How would you describe your skin?</h5>
                            <div className="question row mt-2 mb-5">
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputRadio
                                        name="skintype"
                                        id="skinDry"
                                        label="Dry"
                                        />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputRadio
                                        name="skintype"
                                        id="skinNormal"
                                        label="Normal"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputRadio
                                        name="skintype"
                                        id="skinCombination"
                                        label="Combination"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputRadio
                                        name="skintype"
                                        id="skinOily"
                                        label="Oily"
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