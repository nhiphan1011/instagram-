
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import StoriesWrapper from "../../component/Stories/StoriesWrapper";
import routesConfig from "../../routes/routesConfig";

import styles from './Stories.module.scss'

const cx = classNames.bind(styles)

function Stories() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('inner')}>
                <div className={cx('logo-wrapper')}>
                    <Link to={routesConfig.home}>
                        <i className={cx('logo')} />
                    </Link>
                </div>
                <div className={cx("story")}>
                    <StoriesWrapper />
                </div>
                <div className={cx("close-wrapper")}>
                    <button className={cx("close")}>
                        <svg
                            color="rgb(255, 255, 255)"
                            fill="rgb(255, 255, 255)"
                            height="24" role="img"
                            viewBox="0 0 24 24"
                            width="24">
                            <polyline
                                fill="none"
                                points="20.643 3.357 12 12 3.353 20.647"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"></polyline>
                            <line
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                x1="20.649"
                                x2="3.354"
                                y1="20.649"
                                y2="3.354"></line>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Stories;