import React, { Component } from 'react';
import {Intro} from './Intro';
import {Question1} from "./Question1";
import {Question2} from './Question2';
import {Question3} from "./Question3";
import {Question4} from "./Question4";
import {Question5} from "./Question5";
import {Question6} from "./Question6";

export class SwitchLogic extends Component {
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
                return (
                    <Question1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Question2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                )
            case 4:
                return (
                    <Question3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Question4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <Question5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <Question6
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
                return console.log("Error on switch");
        }
    }
}