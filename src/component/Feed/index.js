
import classNames from "classnames/bind";
import styles from './Feed.module.scss'
import FeedMenu from "./FeedMenu";

const cx = classNames.bind(styles)

function Feed() {
    return (
        <div className={cx('wrapper')}>
            <FeedMenu/>
        </div>
    );
}

export default Feed;