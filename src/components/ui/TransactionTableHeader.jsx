

export default function TransactionTableHeader() {
    const role = 'agent'
    return (
        <thead>
            <tr>
                <th></th>
                <th>Sender </th>
                <th>Receiver</th>
                <th>Amount</th>
                <th>Transaction Type</th>
                <th>Status</th>
                {role == 'agent' && <th>Action</th>}
            </tr>
        </thead>
    )
}
