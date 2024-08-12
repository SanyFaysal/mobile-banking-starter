
export default function Navbar() {
    return (
        <div className="navbar bg-base-200 px-5 rounded-xl">
            <div className="flex-1">
                <h3 className=" text-xl">Dashboard</h3>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details className="w-36">
                            <summary>User Profile</summary>
                            <ul className="bg-base-100 ">
                                <li><p className="mt-2">Abu Sani Faysal</p></li>
                                <li><button className="text-red-500">Logout</button></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}
