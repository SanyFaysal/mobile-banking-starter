import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import DashboardSidebarOptions from "../lib/DashboardSidebarOptions";


export default function Layout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-2 ">
        <div>
          <Navbar />
        </div>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 ">

          <div className="mb-5">
            <p className="text-2xl  text-primary ml-4 font-bold">MyCash</p>
          </div>
          <DashboardSidebarOptions />
        </ul>
      </div>
    </div>
  )
}
