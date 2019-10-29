import React from 'react'
import Rank from './Content/Rank';
import Champions from './Content/Champions';
import WinRate from './Content/WinRate';
import PlayCount from './Content/PlayCount';
import AverageScore from './Content/AverageScore';
import CsScore from './Content/CsScore';
import GoldScore from './Content/GoldScore';
import './ContentBarContent.scss';

export default function StaticsListContentBar(props) {
    return (
        <tr className="statics-listContentBar-background">
            <Rank
                className="rank"
                rank={props.rank}
            />
            <Champions
                className="champion"
            />
            <WinRate
                className="win-rate"
            />
            <PlayCount
                className="play-count"
            />
            <AverageScore
                className="average-score"
            />
            <CsScore
                className="cs-score"
            />
            <GoldScore
                className="gold-score"
            />
        </tr>
    )
}
