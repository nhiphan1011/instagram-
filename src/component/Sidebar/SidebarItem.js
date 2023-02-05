import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Image from '../Image'
import styles from './Sidebar.module.scss'
const cx = classNames.bind(styles)



function SidebarItem({ data, footer = "Follow", profile, className, width, height }) {
    const classes = cx('item-wrapper', {
        [className]: className,
        profile

    })
    return (
        <div className={classes}>
            <div className={cx('avatar')}>
                <Image
                    width={width}
                    height={height}
                    alt={data.name}
                    src={data.url} />
            </div>
            <div className={cx('infor')}>

                <div className={cx('username-wrapper')}>
                    <Link
                        className={cx('user-name')}
                        to={`/${data.username}`}
                    >{data.username}</Link>
                </div>


                <div className={cx('name')}>
                    {(data.name && <div className={cx('full-name')}>{data.name}</div>)
                        || (data.suggest && <div className={cx('suggest-name')}>{data.suggest}</div>)}
                </div>
            </div>
            <div className={cx('footer-item')}>
                <button >
                    <div className={cx('footer-content')}>{footer}</div>
                </button>
            </div>
        </div>
    );
}

export default SidebarItem;