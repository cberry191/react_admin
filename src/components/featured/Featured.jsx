import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">TOTAL REVENUE</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='featuredChart'>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className='title'>Today's Sales: </p>
                <p className="amount">$420</p>
                <p className='description'>
                    Pending payments not included.
                </p>
                <div className="summary">
                    <div className="item" >
                        <div className="itemTitle"> Daily Target</div>
                        <div className="itemResult positive" >
                            <TrendingUpIcon fontSize='small'/>
                            <div className="resultAmount" >$12.4k</div>
                        </div>
                    </div>
                    <div className="item" >
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive" >
                            <TrendingUpIcon fontSize='small'/>
                            <div className="resultAmount" >$12.4k</div>
                        </div>
                    </div>
                    <div className="item" >
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult negative" >
                            <TrendingDownIcon fontSize='small'/>
                            <div className="resultAmount" >$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
