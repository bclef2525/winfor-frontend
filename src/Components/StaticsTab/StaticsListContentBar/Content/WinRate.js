import React from 'react'

export default function WinRate(props) {
    return (
        <div className={props.className}>
            <div
                className="winRate-graph"
                style={{width: "53.62%"}}>
            </div>
            <div className="winRate-number">
                {53.62 + "%"}
            </div>
        </div>
    )
}
