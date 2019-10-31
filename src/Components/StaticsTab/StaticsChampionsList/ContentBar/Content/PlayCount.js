import React from 'react'

export default function PlayCount(props) {
    return (
        <td>
            <div className={props.className}>
                {props.playCount}
            </div>
        </td>
    )
}
