import React, {Component} from "react";

export class InputTextArea extends Component {
    render() {
        return (
            <div className="form-floating mt-2 mb-5 border border-dark rounded-3">
                <textarea className="form-control" id={this.props.id}/>
                <label htmlFor={this.props.id} className="">{this.props.label}</label>
            </div>
        )
    }
}