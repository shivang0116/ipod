import Wheel from "./Wheel";
import Screen from "./Screen";
import React from "react";
// import './index.css';

class Ipod extends React.Component {
    render() {
        return (
            <div className="ipod-container">
                <Screen
                    selectedOpt={this.props.selectedOpt}
                    components={this.props.components}
                    menu={this.props.menu}
                    displayOptions={this.props.displayOptions}
                    currOpt2={this.props.currOpt2}
                    currOpt={this.props.currOpt} />
                <Wheel
                    displayOptions={this.props.displayOptions}
                    centerButtonClicked={this.props.centerButtonClicked}
                    option1={this.props.option1}
                    menu={this.props.menu}
                    decreaseOption={this.props.decreaseOption}
                    increaseOption={this.props.increaseOption}
                    currOpt={this.props.currOpt}
                    components={this.props.components}
                    toggleMenu={this.props.toggleMenu} />
            </div>
        )
    }
}
export default Ipod;