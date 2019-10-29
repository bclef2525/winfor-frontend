import React, { Component } from 'react'
import StaticsNav from '../../Components/StaticsTab/StaticsNav/StaticsNav'
import StaticsListTitleBar from '../../Components/StaticsTab/StaticsListTitleBar/StaticsListTitleBar';
import StaticsListContentBar from '../../Components/StaticsTab/StaticsListContentBar/StaticsListContentBar';
import './staticsChampions.scss';

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
                        <div className="statics-champions-content">
                            <StaticsListTitleBar />
                            {this.printLists()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
