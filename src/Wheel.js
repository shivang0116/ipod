import React from "react";
// import './Wheel.css';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component {
    componentDidMount() {
        let temp = 0;
        let zt = new ZingTouch.Region(document.getElementsByClassName('circle')[0]);
        zt.bind(document.getElementsByClassName('circle')[0], 'rotate', (event) => {
            if (this.props.menu === true) {
                let dist = event.detail.distanceFromLast;
                temp = temp + dist;
                if (temp > 30) {
                    let temp2 = 0;
                    temp2 = this.props.currOpt + 1;
                    temp2 = temp2 % this.props.displayOptions.length;
                    temp = 0;
                    this.props.increaseOption(temp2);
                    // console.log(this.props);
                }
                if (temp < -30) {
                    let temp2 = 0;
                    temp2 = this.props.currOpt - 1;
                    if (temp2 === -1)
                        temp2 = this.props.option1.length - 1;
                    temp2 = temp2 % this.props.displayOptions.length;
                    temp = 0;
                    this.props.increaseOption(temp2);
                    // console.log(this.props);
                }
            }
        });

        let zt2 = new ZingTouch.Region(document.getElementsByClassName('menu')[0]);
        zt2.bind(document.getElementsByClassName('menu')[0], 'tap', (event) => {
            this.props.toggleMenu();
        });
    }
    render() {
        return (
            <div className="wheel-container">
                <div className="center" onClick={() => this.props.centerButtonClicked()}></div>
                <div className="circle">
                    <button className="menu"><b>Menu</b></button><br />
                    <button className="backword"><i class="fas fa-backward"></i></button>
                    <button className="forward"><i class="fas fa-forward"></i></button><br />
                    <button className="play"><i class="fas fa-play"></i>&nbsp;<i class="fas fa-pause"></i></button><br />
                </div>
            </div>
        );
    }
}

export default Wheel;