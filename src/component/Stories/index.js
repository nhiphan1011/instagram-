
import React from 'react';

import Stories from 'react-insta-stories';
import file from '../../data'
const stories = file.storyMenu[0].story


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