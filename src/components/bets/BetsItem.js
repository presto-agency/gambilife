import React from 'react';
import bitcoin from '../../images/bitcoin.svg';

export const BetsItem = ({ data }) => {

    const time = data.time;
    const date = new Date(time),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    const bet = data.bet / 1000;
    const multi = data.payout / 4;
    const profit = data.profit / 1000;

    let profitColor = profit >= 0 ? '#73FC7F' : '#FD7979';
    let profitSign = profit >= 0 ? '+' : '';

    return (
        <tr>
            <td>
                <span className="time">{getNumFormat(day)+'.'+getNumFormat(month)+'.'+year+' '+getNumFormat(hour)+':'+getNumFormat(minute)+':'+getNumFormat(second)}</span>
            </td>
            <td>
                <span className="bet">
                    <img src={bitcoin} className="bitcoin" alt="Bitcoin" />
                    {bet.toFixed(8)}
                </span>
            </td>
            <td>
                <span className="multiplier">{`x${multi.toFixed(3)}`}</span>
            </td>
            <td>
                <span className="profit" style={{ color: profitColor }}>
                    <img src={bitcoin} className="bitcoin" alt="Bitcoin" />
                    {`${profitSign}${profit.toFixed(8)}`}
                </span>
            </td>
        </tr>
    )

};

function getNumFormat(num) {
    return num <= 9 ? '0' + num : num;
}