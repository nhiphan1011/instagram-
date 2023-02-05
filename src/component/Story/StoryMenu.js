import classNames from "classnames/bind";
import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

import styles from './Story.module.scss'
import StoryItem from "./StoryItem";
import file from '../../data'

const data = file.storyMenu
const cx = classNames.bind(styles)
function StoryMenu() {
    const next = <button className={cx('next')} />
    const back = <button className={cx('back')} />
    return (
        <div className={cx('menu-wrapper')}>
            <ul className={cx('menu')}>
                <li></li>
                {data.map((item, index) => (
                    <li id='feed'
                        key={index} className={cx('menuItem')}>
                        <StoryItem data={item} />
                    </li>))}
                <li></li>
            </ul>
            <button className={cx('back', 'back-slider')} />
            <button className={cx('next', 'left-slider')} />
        </div>);

    
            // <Carousel
            //     show={6} slide={4}
            //     transition={0.5} infinite={false}
            //     rightArrow={next} leftArrow={back}>
            //     {data.map((item, index) => (

            //         <StoryItem key={index} data={item} />
            //     ))}
            // </Carousel>)
}

export default StoryMenu;

