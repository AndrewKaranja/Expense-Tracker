import React from 'react'

export const Transaction = ({transaction}) => {
    const sign=transaction.amount<0? '-' :'+';
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
        {transaction.text}
    Cash <span>{sign}KES{Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li> 
    )
}
