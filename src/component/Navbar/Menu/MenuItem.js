//import from library
import classNames from 'classnames/bind';
import { NavLink } from 'react-bootstrap';
// import from file in Project
import styles from './Menu.module.scss'
import file from '../../../data'

const cx = classNames.bind(styles)
const data = file.profile
function MenuItem({ title, to, icon, profile = false, brand = false }) {
    const classes = cx('menu-item', {
        profile,
        brand
    })
    let Comp = 'div'
    if (profile) {
        Comp = 'span'
    }
    return (
        <div className={cx('wrapper')}>
            <NavLink href={to}>
                {
                    (brand && <div className={cx('brand-icon')}>{icon}</div>)
                    || (<div className={classes}>
                        <Comp className={cx('icon')}>
                            {(profile && <img
                                className={cx('avatar')}
                                alt={data.username}
                                src={data.url}
                            >
                            </img>)
                                || (<div>{icon}</div>)}
                        </Comp>

                        <div className={cx('title')}>
                            {title}
                        </div>
                    </div>)
                }
            </NavLink>
        </div>


    );
}

export default MenuItem;