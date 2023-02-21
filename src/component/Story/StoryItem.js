
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './Story.module.scss'

const cx = classNames.bind(styles)

function StoryItem({ data }) {
    const { avatar, name, state } = data
    return (
        <Link to={`/stories`} className={cx('item')}>
            <button className={cx('item-wrapper', state)}>
                <div className={cx('avatar')}>
                    {(state === 'live' && (<>
                        <canvas></canvas>
                        <div>
                            <div className={cx('animation')}>
                                <svg height="66" viewBox="0 0 90 90" width="66">
                                    <circle className={cx('circle1')} cx="50%" cy="50%" fill="#000000" r="38"></circle>
                                    <circle className={cx('circle2')} cx="50%" cy="50%" fill="#737373" r="38"></circle>\
                                </svg>
                            </div>
                            <div className={cx('live-image')}>
                                <span className={cx('image-wrapper')}>
                                    <img className={cx('image')}
                                        alt={name}
                                        src={avatar} />
                                </span>
                            </div>
                        </div>
                        <div className={cx('status')}>
                            <span>LIVE</span>
                        </div>

                    </>

                    )) || (<>
                        <canvas></canvas>
                        <span className={cx('image-wrapper')}>
                            <img className={cx('image')}
                                alt={name}
                                src={avatar}
                            />
                        </span>
                    </>

                        )}
                </div>

                <div className={cx('name')}>
                    <div>{name}</div>
                </div>
            </button>

        </Link>);
}

export default StoryItem;