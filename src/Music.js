import React from "react";
class Music extends React.Component {
    render() {
        return (
            <div className="music-container" style={{ "z-index": -1 }}>
                <h1>Music</h1>
                <div className="info">
                    <div className="image">
                        <img src="https://m.media-amazon.com/images/M/MV5BNzBjYWIzNmQtZjA2NS00ZTMzLThmODQtMGE0MTEzZGE1YTgzXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg" alt=""/>
                    </div>
                    <div><strong>01 Attention</strong><br/>Charlie Puth</div>
                </div>
                <div className="progress-bar">
                </div>
            </div>
        )
    }
}
export default Music;