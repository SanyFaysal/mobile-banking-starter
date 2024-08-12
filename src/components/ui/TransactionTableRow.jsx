
export default function TransactionTableRow() {
    const status = 'pending'
    const role = 'agent'
    return (
        <tr>
            <th></th>
            <td>
                <h4>Abu Sani Faysal</h4>
                <p>01634319696</p>
            </td>
            <td>
                <h4>Abu Sani Faysal</h4>
                <p>01634319696</p>
            </td>
            <td>1200</td>
            <td>Cashin </td>
            <td>
                <button className={`px-2  rounded-full capitalize
                 ${status === 'pending' ? "bg-base-200  " :
                        status === "approved" ? "bg-green-50 text-green-500" :
                            status === "rejected" ? "bg-red-50 text-red-500 " : ""}`}
                >
                    {status}
                </button>
            </td>
            {role === 'agent' && <td className="flex gap-2 items-center">
                <button className="px-2 py-1 rounded-lg bg-blue-100 text-blue-500">Approved</button>
                <button className="px-2 py-1 rounded-lg bg-red-100 text-red-500">Rejected</button>
            </td>}
        </tr>
    )
}
