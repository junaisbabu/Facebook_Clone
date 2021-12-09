import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';




function Header() {
const [{user}, dispatch] = useStateValue();

    return (
        <div className='header' >
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                <div className="header_input">
                <SearchIcon />
                <input placeholder="Search Facebook" type='text' />
                </div>
                
            </div>


            <div className="header_center">
            <div className="header_option header_option--active ">
                <HomeIcon  fontSize="large" />
            </div>
            <div className="header_option">
                <FlagIcon  fontSize="large" />
            </div>
            <div className="header_option">
                <SubscriptionsIcon  fontSize="large" />
            </div>
            <div className="header_option">
                <StorefrontIcon  fontSize="large" />
            </div>
            <div className="header_option">
                <SupervisedUserCircleIcon  fontSize="large" />
            </div>
            </div>


            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
