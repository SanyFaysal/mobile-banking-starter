import TransactionTableHeader from "../../../components/ui/TransactionTableHeader";
import TransactionTableRow from "../../../components/ui/TransactionTableRow";


export default function AgentTransactions() {
    return (
        <div className="overflow-x-auto w-full px-2 py-5">
            <h3 className='text-xl mb-3'>Agent <span className="text-primary">Transactions</span></h3>
            <table className="table table-zebra outline outline-[1px] outline-base-200 shadow">
                <TransactionTableHeader />
                <tbody>
                    {
                        [0, 1, 2].map(item => <TransactionTableRow key={item} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
