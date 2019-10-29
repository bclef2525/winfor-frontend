import React from 'react'
import './StaticsListTitleBar.scss';
import StaticsListTitleBarContent from '../StaticsListTitleBarContent/StaticsListTitleBarContent';

export default function StaticsListTitleBar() {
    return (
        <div className="statics-listTitleBar-background">
            <StaticsListTitleBarContent
                className="rank"
                title="#"
                icon="^"
            />
            <StaticsListTitleBarContent
                className="champion"
                title="챔피언"
                icon="^"
            />
            <StaticsListTitleBarContent
                className="win-rate"
                title="승률"
                icon="^"
            />
            <StaticsListTitleBarContent
                className="play-count"
                title="플레이수"
                icon="^"
            />
            <StaticsListTitleBarContent
                className="average-score"
                title="평점"
                icon="^"
            />
            <StaticsListTitleBarContent
                className="cs-score"
                title="CS"
                icon="^"
            />
            <StaticsListTitleBarContent
                className="gold-score"
                title="골드"
                icon="^"
            />
        </div>
    )
}
