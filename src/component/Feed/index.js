
import classNames from "classnames/bind";
import styles from './Feed.module.scss'
import FeedItem from "./FeedItem";
import file from '../../data'

const cx = classNames.bind(styles)
const data = file.feedData
function Feed() {
    return (
        <div className={cx('menu')}>
            {data.map((item, index) => (
                <article className={cx('item-wrapper')} key={index}>
                    <FeedItem data={item} />
                </article>
            ))}
        </div>
    );
}

export default Feed;