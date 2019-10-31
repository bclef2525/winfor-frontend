import React from 'react'

export default function Champions(props) {
    return (
        <td>
            <div className={props.className}>
                <img src={props.championImgSrc} alt={""}/>
                <div className="champion-name">
                    {props.championName}
                </div>
            </div>
        </td>
    )
}
