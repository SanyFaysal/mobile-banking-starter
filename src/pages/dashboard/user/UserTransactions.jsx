import React from 'react'
import TransactionTableHeader from '../../../components/ui/TransactionTableHeader'
import TransactionTableRow from '../../../components/ui/TransactionTableRow'

export default function UserTransactions() {
    return (
        <div className="overflow-x-auto w-full px-2 py-5">
            <h3 className='text-xl mb-3'>User <span className='text-primary'>Transactions</span></h3>
            <table className="table outline outline-[1px] outline-base-200 shadow">
                {/* head */}
                <TransactionTableHeader />
                <tbody>
                    {
                        [0, 1, 2, 3].map(item => <TransactionTableRow key={item} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
