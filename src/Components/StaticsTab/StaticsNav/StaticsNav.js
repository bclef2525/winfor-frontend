import React from 'react'
import { Link } from 'react-router-dom';
import './StaticsNav.scss'

function StaticsNav() {
    return (
        <div className="statics-nav-background">
            <div className="statics-nav-body">
                <div className="statics-nav-champions-title">
                    <Link
                        className="statics-nav-champions-title-text"
                        to="/Statics/Champions"
                    >
                        챔피언별 게임 통계
                    </Link>
                </div>
                <div className="statics-nav-tiers-title">
                    <Link
                        className="statics-nav-tiers-title-text"
                        to="/Statics/Tiers"
                    >
                        티어별 게임 통계
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StaticsNav;