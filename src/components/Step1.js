import React, { Component } from 'react';
import {Intro} from './Intro';

export class Step1 extends Component {
    state = {
        step: 1,
        age: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value()
        });
    }

    render(){
        const { step } = this.state;
        const { age } = this.state;
        const values = { age }

        switch(step) {
            case 1:
                return (
                    <Intro
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>Step 3</h1>
            case 3:
                return <h1>Success</h1>
            default:
                return console.log("Error on switch");
        }
    }
}