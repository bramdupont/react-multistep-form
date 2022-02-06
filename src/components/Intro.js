import React, {Component} from "react";

export class Intro extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <div className="card text-start">
                    <div className="card-title p-4 pb-0">
                        <h1>Intro</h1>
                    </div>
                <div className="card-body px-4">
                    <p>At Blos we believe in a personal approach, also online. To fully understand the needs of your skin, we developed a skincare quiz. After answering these questions, we’ll have a good idea of what your skin needs. An expert will analyse your answers and send you all personal recommendations via email.</p>
                </div>
                <div className="card-footer">
                <div className="row flex-row justify-content-end d-flex">
                    <div className="col-auto">
                        <a href="#" className="d-inline-block btn btn-primary" onClick={this.continue}>Next</a>
                    </div>
                </div>
                </div>
            </div>

            </div>
        )
    }
}