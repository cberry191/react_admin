import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">CHRIS BERRY</span>
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PeopleAltIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <ShoppingBasketIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <ReceiptIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">TOOLS</p>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationImportantIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SYSTEM</p>
                    <li>
                        <HealthAndSafetyIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <CollectionsBookmarkIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">Colour Theme</div>
                <div className="colorOption" ></div>
                <div className="colorOption" ></div>
        </div>
    );
}

export default Sidebar;
