import { Col } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from './Home.module.scss'
import Sidebar from "../../../component/Sidebar";
import Story from "../../../component/Story";
import Feed from "../../../component/Feed";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('main-wrapper')}>
            <section className={cx('main')}>
                <Col xl={6} className={cx('content')}>
                    <div className={cx('story-container')}>
                        <div className={cx("story-inner")}>
                            <Story />
                        </div>
                    </div>

                    <div className={cx("feed")}>
                        <Feed />
                    </div>
                </Col>
                <Col xl={4} className={cx('sidebar')}>
                    <Sidebar />
                </Col>
            </section>
        </div>
    );
}

export default Home;