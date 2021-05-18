import { Component, createElement } from "react";

export default class IfElse extends Component {
    render() {
        if (!this.props.if.status === "available") {
            return null;
        }
        return this.props.if.value
            ? this.props.then
            : this.props.else;
    }
}
