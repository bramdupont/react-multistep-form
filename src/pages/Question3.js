import React, {Component} from "react";
import {InputCheckbox} from "../components/InputCheckbox";

export class Question3 extends Component {
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
                            <h5 className="card-title d-inline-block">How would you describe your skin concerns?</h5>
                            <div className="question row mt-2 mb-5">
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinTight"
                                        label="Tight"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinLackOfGlow"
                                        label="Lack Of Glow"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinAcne"
                                        label="Acne"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinShiny"
                                        label="Shiney"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinEnlargedPores"
                                        label="Enlarged Pores"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinSensitive"
                                        label="Sensitive"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinBlackheads"
                                        label="Blackheads"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinRosacea"
                                        label="Rosacea"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinCouperose"
                                        label="Couperose"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinRedBumps"
                                        label="Red bumps"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinPigmentation"
                                        label="Pigmentation"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinFlakey"
                                        label="Flakey"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinImpurities"
                                        label="Impurities"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinPimples"
                                        label="Pimples"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinReactive"
                                        label="Reactive"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinRed"
                                        label="Red"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinFineLines"
                                        label="Fine Lines"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinWrinkles"
                                        label="Wrinkles"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinSagging"
                                        label="Sagging"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinSensitiveEyeArea"
                                        label="Sensitive eye area"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinDehydration"
                                        label="Dehydration"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinConcern"
                                        id="skinOilyTZone"
                                        label="Oily T-zone"
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