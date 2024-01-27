import { Component } from "react";

class Hello extends Component {
    constructor() {
        super();
        console.log("Hello_Constructor")
        this.state = {
            name: "Harish"
        }
    }
    render() {
        const { name } = this.props
        console.log("Hello_Render")
        return (
            <div className = 'f1 tc'>
                <h1>Hello { name } { this.state.name }</h1>
                <button onClick={() => {
                    this.setState({
                        name: "Jaswanth"
                    })
                }}> Click me</button>
            </div>
        );
    }
}

export default Hello;