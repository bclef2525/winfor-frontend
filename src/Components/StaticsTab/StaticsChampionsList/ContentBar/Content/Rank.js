import React from 'react'

export default function Rank(props) {
    return (
        <td>
            <div className={props.className}>
                {props.rank}
            </div>
        </td>
    )
}
