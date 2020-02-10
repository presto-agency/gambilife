import React from 'react';
import {BetsItem} from "./BetsItem";

export const BetsList = ({ data: { bets } }) => {

    return(
        <div className="content-data">
            <table className="table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Bet</th>
                        <th>Multiplier</th>
                        <th>Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bets.map((bet, key) => {
                            return <BetsItem data={bet} key={key} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )

};