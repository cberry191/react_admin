import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';

import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                 <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className="icon" />
                 </div>
                 <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon"  />
                    </div>
                    <div className="item">
                        <FullscreenIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationImportantIcon className="icon" />
                        <div className="counter" >1</div>
                    </div>
                    <div className="item">
                        <ChatIcon className="icon" />
                        <div className="counter" >2</div>
                    </div>
                    <div className="item">
                        <ListIcon className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/13088398/pexels-photo-13088398.jpeg?cs=srgb&dl=pexels-jair-hernandez-13088398.jpg&fm=jpg"
                            alt=""
                            className="avatar" />
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Navbar;
