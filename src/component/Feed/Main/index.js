import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import styles from './Main.module.scss'

const cx = classNames.bind(styles)


function Main({ data }) {
    const [layout, setLayout] = useState()
    const d = data.feed.media
    useEffect(() => {
        if (d.length === 1) {
            setLayout(0)
        } else if (d.length > 1 && d.length < 5 && data.feed.layout === true) {
            if (d.length === 2) {
                setLayout(2)
            } else if (d.length === 3) {
                setLayout(3)
            } else if (d.length === 4) {
                setLayout(4)
            }
        } else if (d.length > 4 || data.feed.layout === false) {
            setLayout(1)
        } else { return console.log('Error') }

    }
        , [d.length, data.feed.layout])

    return (
        <div className={cx('main')}>
            {layout === 0 && <Layout0>{d}</Layout0>}
            {layout === 1 && <Layout1>{d}</Layout1>}
            {layout === 2 && <Layout2>{d}</Layout2>}
            {layout === 3 && <Layout3>{d}</Layout3>}
            {layout === 4 && <Layout4>{d}</Layout4>}
        </div >
    );
}
const Layout0 = ({ children }) => {
    return <div className={cx('img')}><img alt={children.name} src={children[0]} /></div>
}
const Layout1 = ({ children }) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        className: cx('feed')
    }
    return (
        <div className={cx("wrapper")}>
            <Slider {...settings}>
                {children.map((item, index) => {
                    return <div className={cx('img')} key={index}><img alt="" src={item} /></div>
                })}
            </Slider>
        </div>)
}
const Layout2 = ({ children }) => {
    return (
        <Container className={cx("wrapper", "p-0")}>
            <Row className={cx("m-0")}>
                {children.map((item, index) => {
                    return (
                        <Col key={index} style={{ padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
                            <div className={cx('img')}><img alt="" src={item} /></div>
                        </Col>)
                })}
            </Row >
        </Container>
    )
}
const Layout3 = ({ children }) => {
    return (
        <Container className={cx("wrapper", "p-0")}>
            <Row className="m-0">
                <Col style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                    <div className={cx('img')}><img alt="" src={children[0]} /></div>
                </Col>
                <Col style={{ padding: 0 }}>
                    <div className={cx('img')}><img alt="" src={children[1]} /></div>
                    <div className={cx('img')}><img alt="" src={children[2]} /></div>
                </Col>
            </Row>
        </Container>
    )
}
const Layout4 = ({ children }) => {
    return (
        <Container className={cx("wrapper", "p-0")}>
            <Row className="m-0">
                <Col style={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className={cx('img')}><img alt="" src={children[0]} /></div>
                    <div className={cx('img')}><img alt="" src={children[1]} /></div>
                </Col>
                <Col style={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className={cx('img')}><img alt="" src={children[2]} /></div>
                    <div className={cx('img')}><img alt="" src={children[3]}    /></div>
                </Col>
            </Row>
        </Container>
    )
}
export default Main;