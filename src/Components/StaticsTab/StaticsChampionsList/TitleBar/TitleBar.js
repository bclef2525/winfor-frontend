import React, { Component } from 'react'
import './TitleBar.scss';
import StaticsListTitleBarContent from './Content';

export default class StaticsListTitleBar extends Component {
    render(){
        const {
            rank,
            chmpionName,
            winRate,
            playCount,
            averageScore,
            csScore,
            goldScore,
        } = this.props;

        return (
            <thead className="statics-listTitleBar-background">
                <tr className="statics-listTitleBar">
                    <StaticsListTitleBarContent
                        className="rank"
                        title="#"
                        arrowImg={rank}
                        onClick={this.props.onClick}
                    />
                    <StaticsListTitleBarContent
                        className="championName"
                        title="챔피언"
                        arrowImg={chmpionName}
                        onClick={this.props.onClick}
                    />
                    <StaticsListTitleBarContent
                        className="winRate"
                        title="승률"
                        arrowImg={winRate}
                        onClick={this.props.onClick}
                    />
                    <StaticsListTitleBarContent
                        className="playCount"
                        title="플레이수"
                        arrowImg={playCount}
                        onClick={this.props.onClick}
                    />
                    <StaticsListTitleBarContent
                        className="averageScore"
                        title="평점"
                        arrowImg={averageScore}
                        onClick={this.props.onClick}
                    />
                    <StaticsListTitleBarContent
                        className="csScore"
                        title="CS"
                        arrowImg={csScore}
                        onClick={this.props.onClick}
                    />
                    <StaticsListTitleBarContent
                        className="goldScore"
                        title="골드"
                        arrowImg={goldScore}
                        onClick={this.props.onClick}
                    />
                </tr>
            </thead>
        )
    }
}
