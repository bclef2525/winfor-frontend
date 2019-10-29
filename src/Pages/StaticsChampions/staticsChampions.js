import React, { Component } from 'react'
import StaticsNav from '../../Components/StaticsTab/StaticsNav';
import StaticsListTitleBar from '../../Components/StaticsTab/StaticsChampionsList/TitleBar';
import StaticsListContentBar from '../../Components/StaticsTab/StaticsChampionsList/ContentBar';
import StaticsListColGroup from '../../Components/StaticsTab/StaticsChampionsList/ColGroup';
import './StaticsChampions.scss';

export default class staticsChampions extends Component {
    render() {
        this.printLists = () => {
            let _lists = [];
            for(let i = 1; i < 146; i++){
                _lists.push(
                    <StaticsListContentBar
                        key={i}
                        rank={i}
                    />
                )
            }
            return _lists
        }
        return (
            <>
                {/* nav */}
                <StaticsNav />
                <div className="statics-champions-background">
                    <div className="statics-champions-body">
                        <div className="statics-champions-desc-text">
                            챔피언별 통계를 볼 수 있습니다.
                        </div>
                        <table className="statics-champions-content">
                            <StaticsListColGroup />
                            <StaticsListTitleBar />
                            <tbody>
                                {this.printLists()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
