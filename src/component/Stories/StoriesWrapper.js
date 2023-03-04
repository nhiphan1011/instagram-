import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import './Stories.css'
import StoriesComponent from './index'
// import StoriesComponent from './StoriesCustom'
import file from '../../data'
import './Stories.css'

// import classNames from 'classnames/bind';
// import styles from './Stories.module.scss'
// const cx = classNames.bind(styles)

function StoriesWrapper() {
    const settings = {
        className: "center",
        infinite: false,
        centerMode: true,
        // centerPadding: "2px",
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        adaptiveHeight:true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {file.storyMenu.map((item, index) =>
                    <StoriesComponent key={index} data={item} />
                )}
            </Slider>
        </div>
    );
}

export default StoriesWrapper;