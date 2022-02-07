import React, {Component} from "react";

export class Intro extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <div>
                <div className="row d-flex flex-row">
                    <div className="col-lg-5 flex-left"
                         style={{
                             backgroundImage: `url('./assets/img/intro_img.jpeg')`,
                             backgroundSize: "cover",
                             backgroundRepeat: "no-repeat",
                             backgroundPosition: "center",
                             height: "750px"
                    }}>
                    </div>
                    <div className="px-4 col-lg-7 flex-right d-flex flex-column justify-content-between">
                        <div className="text-start">
                        <h1 className="mb-4">Intro</h1>
                        <p>At Blos we believe in a personal approach, also online. To fully understand the needs of your
                            skin, we developed a skincare quiz. After answering these questions, we’ll have a good idea
                            of what your skin needs. An expert will analyse your answers and send you all personal
                            recommendations via email.</p>
                        </div>
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