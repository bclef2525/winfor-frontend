import React from 'react'

export default function CsScore(props) {
    return (
        <td>
            <div className={props.className}>
                <div
                    className="cs-score-graph"
                    style={{width: 170.39/300*100+"%"}}>
                </div>
                <div className="cs-score-number">
                    {170.39}
                </div>
            </div>
        </td>
    )
}
