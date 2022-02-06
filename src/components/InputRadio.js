import React, {Component} from "react";

export class InputRadio extends Component {
    render() {
        return (
            <div>
                <input type="radio" name={this.props.name} id={this.props.id} value={this.props.id}/>
                <label className="ms-2" htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}