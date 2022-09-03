import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
                <p className='title'>Sales Today</p>
                <P className='amount'>$420</P>
                <p className='description'>
                    Pending Payments Not Included.
                </p>
            </div>
        </div>
    );
}

export default Featured;
