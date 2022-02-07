import React, {Component} from "react";
import {InputRadio} from "../components/InputRadio";

export class Question16 extends Component {
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
                            <h5 className="card-title d-inline-block">Do you use micellar water?</h5>
                            <div className="question row mt-2 mb-5">
                                <div className="d-flex mb-2 flex-row align-items-center">
                                    <InputRadio
                                        name="water"
                                        id="waterYes"
                                        label="Yes"
                                    />
                                </div>
                                <div className="d-flex mb-2 flex-row align-items-center">
                                    <InputRadio
                                        name="water"
                                        id="waterNo"
                                        label="No"
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