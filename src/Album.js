import React from "react";
class Album extends React.Component {
    render() {
        return (
            <div className="album-container" style={{ "z-index": -1 }}>
                <i class="fas fa-compact-disc"></i>
                <h1>Album</h1>
            </div>
        )
    }
}
export default Album;