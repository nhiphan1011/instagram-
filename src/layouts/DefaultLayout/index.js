
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import styles from './DefaultLayout.module.scss'
import Navbar from '../component/Navbar'
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <Container fluid className={cx('container')}>
            <Row className={cx('inner')}>
                <Col xl={2} className={cx("m-0 p-0", 'navbar')}>
                    <Navbar />
                </Col>
                <Col xl={10} className={cx("m-0 p-0")}  >
                    <section>{children}</section>
                </Col>
            </Row>
        </Container>);
}

export default DefaultLayout;