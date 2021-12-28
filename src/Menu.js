import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu-container">
                <h1>Ipod</h1><hr />
                <div class="option-list">
                    {/* mapping the option so that it refect on screen component */}
                    {this.props.displayOptions.map((opt, index) => {
                        if (index !== this.props.currOpt)
                            return <div className={"opt" + index + 1}>{opt}</div>;
                        else
                            return (<div className={"opt" + index + 1+" active"}>{opt}<span>&gt;</span></div>);
                    })}
                </div>
            </div>
        )
    }
}
export default Menu;