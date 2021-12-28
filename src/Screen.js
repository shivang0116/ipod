import React from "react";
import Menu from "./Menu.js";
import Home from './Home.js';
import Settings from "./Settings";
import Games from "./Games";
import Coverflow from "./Coverflow";
import Music from "./Music";
import Album from "./Album";
import Artist from "./Artist";

class Screen extends React.Component {
    renderingComponent = () => {
        if (this.props.displayOptions.length === 5) {
            if (this.props.selectedOpt === 0) {
                return <Home />
            }
            else if (this.props.selectedOpt === 1) {
                return <Coverflow />
            }
            else if (this.props.selectedOpt === 2) {
                return <Music />
            }
            else if (this.props.selectedOpt === 3) {
                return <Games />
            }
            else if (this.props.selectedOpt === 4) {
                return <Settings />
            }
        }
        else if (this.props.displayOptions.length === 3) {
            if (this.props.selectedOpt === 0) {
                return <Music />
            }
            else if (this.props.selectedOpt === 1) {
                return <Artist />
            }
            else if (this.props.selectedOpt === 2) {
                return <Album />
            }
        }
    }
    render() {
        // console.log("Screen.js:12",this.props.menu)
        return (
            <div className="screen-container">
                {this.props.menu ? <Menu selectedOpt={this.props.selectedOpt} displayOptions={this.props.displayOptions} currOpt={this.props.currOpt} /> : <></>}

                {/* components according to selected option */}
                {this.renderingComponent()}
            </div>
        )
    }
}
export default Screen;