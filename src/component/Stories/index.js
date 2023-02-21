
import React from 'react';
// import classNames from "classnames/bind";

import Stories from 'react-insta-stories';
import file from '../../data'
import styles from './Stories.module.scss'

// const cx = classNames.bind(styles)
const cre = file.storyMenu[0];

const stories = cre.story.map((item) => {
    return {
        ...item,
        header: {
            heading: `${cre.name}`,
            subheading: "Posted 30m ago",
            profileImage: `${cre.avatar}`
        }
    };
});

function StoriesComponent() {
    return (
        <Stories
            stories={stories}
            defaultInterval={5000}
            width={330.48}
            height={587.52} />
    )
}


export default StoriesComponent;