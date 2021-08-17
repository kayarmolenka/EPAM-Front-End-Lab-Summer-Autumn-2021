import { Component } from "react";

import './SumRage.css';

export default class SumRage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="result"> Sum of rage is <span className="result_number">{this.props.sum}</span></div>
        )
    }
}