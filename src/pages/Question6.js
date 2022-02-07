import React, {Component} from "react";
import {InputCheckbox} from "../components/InputCheckbox";
import {InputText} from "../components/InputText";

export class Question6 extends Component {
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
                            <h5 className="card-title d-inline-block">What skincare products do you use at this moment?</h5>
                            <div className="question row my-2">
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductCleanser"
                                        label="Cleanser"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductEssence"
                                        label="Essence"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductToner"
                                        label="Toner"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductSerum"
                                        label="Serum"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductDayCream"
                                        label="Day Cream"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductNightCream"
                                        label="Night Cream"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductSunscreen"
                                        label="Sunscreen"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductEyeCream"
                                        label="Eye Cream"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductPeeling"
                                        label="Peelings"
                                    />
                                </div>
                                <div className="col-lg-3 d-flex flex-row align-items-center">
                                    <InputCheckbox
                                        name="skinCareProduct"
                                        id="skinCareProductMasks"
                                        label="Masks"
                                    />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <InputText
                                        name="skinCareProduct"
                                        id="skinCareProductOther"
                                        label="Other"
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