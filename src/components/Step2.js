import React, {Component} from "react";

export class Step2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;
        return (
            <div>
                <h1>Step2</h1>
                <React.Fragment>
                    <div className="card">
                        <div className="card-body text-start">
                            <h5 className="card-title d-inline-block">How old are you?</h5>
                            <div className="row flex-row justify-content-end d-flex">
                                <div className="col-auto">
                                <a href="#" className="d-inline-block btn btn-outline-secondary">Previous</a>
                                </div>
                                <div className="col-auto">
                                    <a href="#" className="d-inline-block btn btn-primary">Next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}