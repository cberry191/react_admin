import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SavingsIcon from '@mui/icons-material/Savings';


import "./widget.scss"

const Widget = ({ type }) => {
    let data;
    

    //dummy data
    const amount = 100;
    const diff = 23;

    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See All Users",
                icon: <PeopleAltIcon className="icon"/>,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: true,
                link: "See All Orders",
                icon: <ShoppingBasketIcon className="icon"/>,
            };
        break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "See Earnings",
                icon: <ReceiptIcon className="icon"/>,
            };
        break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Balance",
                icon: <SavingsIcon className="icon"/>,
            };
        break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title" >{data.title}</span>
                <span className="counter" >{data.isMoney && "$"} {amount} </span>
                <span className="link" >{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <TrendingUpIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
