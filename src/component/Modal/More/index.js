import Modal from 'react-bootstrap/Modal';
import classNames from "classnames/bind";
import styles from './More.module.scss'
const cx = classNames.bind(styles)

function More(props) {
    return (
        < >
            <Modal className={cx('more')} {...props} size="sm" centered >
                {props.data.map((e, i) => (
                    <button className={cx('more-btn')} key={i}>{e}</button>
                ))}
            </Modal>

        </>
    );
}

export default More;