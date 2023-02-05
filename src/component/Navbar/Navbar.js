
//import from library
import classNames from 'classnames/bind';
import { BrandIcon, CreateIcon, ExploreIcon, HomeIcon, MessengerIcon, MoreIcon, NoticeIcon, SearchIcon } from '../Icons'
// import from file in Project
import styles from './Navbar.module.scss'
import { routesConfig } from '../../routes'
import Menu, { MenuItem } from './Menu';
const cx = classNames.bind(styles)

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <div className={cx('brand')}>
                    <MenuItem brand icon={<BrandIcon />} />
                </div>
            </header>
            <Menu>
                <MenuItem title="Home" icon={<HomeIcon />} to={routesConfig.home}/>
                <MenuItem title="Search" icon={<SearchIcon />} />
                <MenuItem title="Explore" icon={<ExploreIcon />} to={'/explore'} />
                <MenuItem title="Messages" icon={<MessengerIcon />} to={routesConfig.messages} />
                <MenuItem title="Notifications" icon={<NoticeIcon />} />
                <MenuItem title="Create" icon={<CreateIcon />} />
                <MenuItem title="Profile" profile to={routesConfig.profile}/>
            </Menu>
            <MenuItem title="More" icon={<MoreIcon />} />
        </div>
        
    );
}

export default Navbar;

