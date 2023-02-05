

import classNames from "classnames/bind";

import styles from './Story.module.scss'
import StoryMenu from "./StoryMenu";


const cx= classNames.bind(styles)


function Story() {
    
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <StoryMenu/>
            </div>
            
        </div>
     );
}

export default Story;