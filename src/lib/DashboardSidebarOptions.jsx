import { Link } from "react-router-dom";


export default function DashboardSidebarOptions() {
    const role = "agent";
    return (
        <>
            {
                role === 'user' ?
                    <>
                        <li><Link to={'/user/profile'} className="   text-[16px]  ">Profile</Link></li>
                        <li><Link to={'/user/sendmoney'} className="   text-[16px]  ">Send Money</Link></li>
                        <li> <Link to={'/user/cashout'} className="   text-[16px]  ">Cashout</Link></li>
                        <li> <Link to={'/user/cashin'} className="   text-[16px]  ">Cashin</Link> </li>
                        <li> <Link to={'/user/transactions'} className="   text-[16px]  ">Transactions</Link> </li>
                    </> :

                    role === "agent" ?
                        <>
                            <li> <Link to={'/agent/profile'} className="   text-[16px]   text-black ">Profile</Link></li>
                            <li> <Link to={'/agent/manage-cashin'} className="   text-[16px]   text-black ">Manage Cashin</Link></li>
                            <li> <Link to={'/agent/manage-cashout'} className="   text-[16px]   text-black ">Manage Cashout</Link></li>
                            <li> <Link to={'/agent/transactions'} className="   text-[16px]   text-black ">Transactions</Link></li>
                        </> :

                        role === "admin" ? <>
                            <li><Link to='/admin/profile' className="   text-[16px]   text-black ">Profile</Link></li>
                            <li><Link to='/admin/manage-users' className="   text-[16px]   text-black ">Manage Users</Link></li>
                            <li><Link to='/admin/manage-agents' className="   text-[16px]   text-black ">Manage Agents</Link></li>
                            <li><Link to='/admin/all-transactions' className="   text-[16px]   text-black ">Transactions</Link></li>
                        </>
                            :
                            <></>
            }
        </>
    )
}
