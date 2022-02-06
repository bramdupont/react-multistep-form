import React, {Component} from "react";

export class InputText extends Component {
    render() {
        return (
            <div className="form-floating mt-2 mb-5 border border-dark rounded-3">
                <input type="text" className="form-control" id={this.props.id}/>
                <label htmlFor={this.props.id} className="">{this.props.label}</label>
            </div>
        )
}
}