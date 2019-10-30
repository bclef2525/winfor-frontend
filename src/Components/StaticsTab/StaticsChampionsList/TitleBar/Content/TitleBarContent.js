import React from 'react'

export default function StaticsListTitleBarContent(props) {
    //console.log(props.arrowImg)
    return ( 
        <th>
            <div
                className={props.className}
            >
                <div>
                    {props.title}
                </div>
                <img
                    src={props.arrowImg}
                    alt={""}
                    onClick={props.onClick}
                    name={props.className}
                />
            </div>         
        </th>
    )
}