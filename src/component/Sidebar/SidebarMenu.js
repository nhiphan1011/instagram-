
import classNames from "classnames/bind";
import file from "../../data";

import styles from './Sidebar.module.scss'
import SidebarItem from "./SidebarItem";

const cx = classNames.bind(styles)

const data = file.sidebarMenu

function SidebarMenu() {
    return (
        <div className={cx('menu-wrapper')}>
            {data.map((item, index) =>
                <SidebarItem key={index} data={item} width={'32px'} height={'32px'} />)}
        </div>);
}

export default SidebarMenu;