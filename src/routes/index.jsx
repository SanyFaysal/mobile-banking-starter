import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import App from "../App";
import Register from "../pages/auth/Register";
import Cashin from "../pages/dashboard/user/Cashin";
import Cashout from "../pages/dashboard/user/Cashout";
import SendMoney from "../pages/dashboard/user/SendMoney";
import UserTransactions from "../pages/dashboard/user/UserTransactions";
import ManageCashin from "../pages/dashboard/agent/ManageCashin";
import ManageCashout from "../pages/dashboard/agent/ManageCashout";
import AgentTransactions from "../pages/dashboard/agent/AgentTransactions";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import ManageAgent from "../pages/dashboard/admin/ManageAgent";
import AllTransactions from "../pages/dashboard/admin/AllTransactions";
import Profile from "../pages/dashboard/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'user',
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'cashin',
                        element: <Cashin />
                    },
                    {
                        path: 'cashout',
                        element: <Cashout />
                    },
                    {
                        path: 'sendmoney',
                        element: <SendMoney />
                    },
                    {
                        path: 'transactions',
                        element: <UserTransactions />
                    },
                ]
            },
            {
                path: 'agent',
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'manage-cashin',
                        element: <ManageCashin />
                    },
                    {
                        path: 'manage-cashout',
                        element: <ManageCashout />
                    },

                    {
                        path: 'transactions',
                        element: <AgentTransactions />
                    },
                ]
            },
            {
                path: 'admin',
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'manage-users',
                        element: <ManageUsers />
                    },
                    {
                        path: 'manage-agents',
                        element: <ManageAgent />
                    },

                    {
                        path: 'all-transactions',
                        element: <AllTransactions />
                    },
                ]
            },
        ]
    },
    {
        path: '/login',
        element: <Login />

    },
    {
        path: '/register',
        element: <Register />

    }
])