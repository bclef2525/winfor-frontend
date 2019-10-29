import React from 'react'

export default function StaticsListTitleBarContent(props) {
    return (
        <th>
            <div className={props.className}>
                <div>
                    {props.title}
                </div>
                <div>
                    {props.icon}
                </div>
            </div>         
        </th>
    )
}