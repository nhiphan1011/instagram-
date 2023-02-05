
import classNames from "classnames/bind"

import styles from './Sidebar.module.scss'
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";
import data from '../../data'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const profile = data.profile
const footerMenu = data.footerMenu

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-wrapper')}>
                    <SidebarItem
                        profile
                        data={profile}
                        footer={'Switch'}
                        width={'56px'}
                        height={'56px'}
                    />
                </div>
            </header>
            <main className={cx('main')}>
                <div className={cx("suggestions")}>
                    <div className={cx("title")}>Suggestions For You</div>
                    <div className={cx('footer-item')}>
                        <button className={cx('footer-content')} >See All</button>
                    </div>
                </div>
                <div className={cx("menu")}>
                    <SidebarMenu footer={'Follow'} />
                </div>
            </main>
            <footer>
                <nav className={cx('footer-menu-wrapper')}>
                    <ul className={cx('footer-menu')}>
                        {Object.keys(footerMenu).map((e, index) => {
                            const value = footerMenu[e]
                            return (
                                <li
                                    className={cx('footer-item-wrapper')}
                                    key={index}>
                                    {
                                        (value.to &&
                                            <Link
                                                className={cx('footer-menu-item')}
                                                to={value.to}
                                                target='_blank'>
                                                <span className={cx('content')}>{value.title}</span>
                                            </Link>)
                                        || (value.href &&
                                            <a
                                                className={cx('footer-menu-item')}
                                                href={value.href || false}
                                                target='_blank' rel="noreferrer">
                                                <span className={cx('content')}>{value.title}</span>
                                            </a>)}

                                </li>
                            )
                        }
                        )}
                    </ul>
                </nav>
                <span className={cx('content')}>© 2023 INSTAGRAM FROM META</span>
            </footer>
        </div >
    );
}

export default Sidebar;