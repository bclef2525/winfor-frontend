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
        <tr className="statics-listContentBar-background" id={"top"+props.rank}>
            <Rank
                className="rank"
                rank={props.rank}
            />
            <Champions
                className="champion"
                championImgSrc={props.championImgSrc}
                championName={props.championName}
            />
            <WinRate
                className="win-rate"
                winRate={props.winRate}
            />
            <PlayCount
                className="play-count"
                playCount={props.playCount}
            />
            <AverageScore
                className="average-score"
                averageScore={props.averageScore}
            />
            <CsScore
                className="cs-score"
                csScore={props.csScore}
            />
            <GoldScore
                className="gold-score"
                goldScore={props.goldScore}
            />
        </tr>
    )
}
